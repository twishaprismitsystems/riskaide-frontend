import PageLoading from "@/common/PageLoading";
import AdminCommonForm from "@/components/Admin/Common/AdminCommonForm";
import AdminAbout from "@/components/Admin/About/AdminAbout"
import AdminFooterSection from "@/components/Admin/Footer/AdminFooterSection";
import AdminHomePage from "@/components/Admin/Home/AdminHomePage";
import AdminServicePage from "@/components/Admin/Service/AdminServicePage";
import { adminTabs } from "@/config/AdminTabs";
import AdminLayout from "@/layouts/AdminLayout";
import ApiService from "@/services/ApiService";
import utils from "@/utils/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Index() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    checkUser();
  }, [])

  const checkUser = async () => {
    let token = localStorage.getItem('riskaide_token');
    try {
      if (token) {
        let data: any = await ApiService.checkUser(token)
        if (data.inValid) {
          utils.showErrorMessage("Token Expired");
          router.push('/admin/login')
        } else {
          setIsLoading(false);
        }
      } else {
        router.push('/admin/login')
      }
    } catch (e) {
      utils.showErrorMessage("something went wrong" + e);
    }
  }

  if (isLoading) return <PageLoading />

  return (
    <AdminLayout>
      <div className="pt-[15rem] container mt-16 font-medium text-gray-500 relative">
        <ul className="flex flex-wrap -mb-px">
          {adminTabs.map((item, index) => (
            <li key={index} className="mr-4">
              <button
                onClick={() => {
                  setSelectedIndex(index);
                }}
                type="button"
                className={`inline-block p-4 text-h3 text-center ${selectedIndex === index && "border-b-2 border-blue-600"
                  } rounded-t-lg hover:text-gray-600 hover:border-gray-300`}
              >
                <span>{item}</span>
              </button>
            </li>
          ))}
        </ul>

        {selectedIndex === 0 && <AdminCommonForm />}
        {selectedIndex === 1 && <AdminHomePage />}
        {selectedIndex === 2 && <AdminAbout />}
        {selectedIndex === 3 && <AdminServicePage />}
        {selectedIndex === 5 && <AdminFooterSection />}
      </div>
    </AdminLayout>
  );
}
