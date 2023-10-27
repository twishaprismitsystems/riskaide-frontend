import Header from "@/components/Header";
import PageLoading from "@/common/PageLoading";
import ApiService from "@/services/ApiService";
import { IHeader } from "@/types/homePage";
import utils from "@/utils/utils";
import { useEffect, useState } from "react";

export default function AdminLayout(props: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [headerData, setHeaderData] = useState<IHeader>({} as IHeader);

  const loadData = async () => {
    try {
      const res = await ApiService.getHeaderInfo();
      if (!res.isError) {
        setHeaderData(res.data[0]?.header);
        return null;
      }
      throw new Error(res.message);
    } catch (ex: any) {
      utils.showErrorMessage(ex.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) return <PageLoading />;
  return (
    <>
      <Header isAdmin={true} result={headerData} />
      {props.children}
    </>
  );
}
