import { adminHomePageSchema } from "@/services/yupSchema/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from 'yup';
import AboutCompanySection from "./AdminAboutCompany/AdminAboutCompanySection";
import AdminBlogsSection from "./AdminBlogs/AdminBlogsSection";
import AdminHeroSection from "./AdminHero/AdminHeroSection";
import AdminInsuranceSection from "./AdminInsurance/AdminInsuranceSection";
import AdminServiceSection from "./AdminService/AdminServiceSection";
import AdminQuote from "./AdminQuote/AdminQuote";
import ApiService from "@/services/ApiService";
import { useRouter } from "next/router";
import utils from "@/utils/utils";
import PageLoading from "@/common/PageLoading";
import { IHomePageInfo } from "@/types/homePage";

export default function AdminHomePage() {
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [homeData, setData] = useState<IHomePageInfo>({} as IHomePageInfo);
  const router = useRouter();

  const loadData = async () => {
    try {
      setIsLoading(true)
      const token = localStorage.getItem('riskaide_token');
      if (token) {
        const res = await ApiService.getHomePageDataForAdmin(token);
        if (!res.isError) {
          setData(res.data)
          return null;
        }
      } else {
        router.push('/admin/login')
      }
    } catch (ex: any) {
      utils.showErrorMessage(ex.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData();
  }, [])

  const objForm = useForm({
    defaultValues: {
      heroSection: {
        heroBtnTitle: "",
        heroImage: "",
        heroTitle: ""
      },
      insurance: {
        title: "",
        description: "",
        data: [
          {
            title: "",
            normalImage: "",
            hoverImage: "",
            description: ""
          },
        ]
      },
      aboutCompany: {
        title: "",
        subTitle: "",
        missionTitle: "",
        missionDesc: "",
        missionSubDesc: "",
        missionDetails: [],
        btnTitle: "",
        image: "",
        subImage: "",
      },
      service: {
        title: "",
        btnTitle: "",
        subTitle: "",
        desc: "",
        data: [
          {
            image: "",
            title: "",
            desc: ""
          }
        ]
      },
      blogs: {
        btnTitle: "",
        subTitle: "",
        desc: "",
        data: [
          {
            img: "",
            title: ""
          }
        ]
      },
    },
    resolver: yupResolver(adminHomePageSchema)
  })

  useEffect(() => {
    if (homeData && Object.keys(homeData).length > 0) {
      objForm.reset({
        heroSection: {
          heroBtnTitle: homeData.heroSection?.heroBtnTitle || "",
          heroImage: homeData.heroSection?.heroImage || "",
          heroTitle: homeData.heroSection?.heroTitle || ""
        },
        insurance: {
          title: homeData.insurance.title,
          description: homeData.insurance.description,
          data: homeData.insurance.data
        },
        aboutCompany: {
          title: homeData.aboutCompany.title,
          subTitle: homeData.aboutCompany.subTitle,
          missionTitle: homeData.aboutCompany.missionTitle,
          missionDesc: homeData.aboutCompany.missionDesc,
          missionSubDesc: homeData.aboutCompany.missionSubDesc,
          missionDetails: homeData.aboutCompany.missionDetails,
          btnTitle: homeData.aboutCompany.btnTitle,
          image: homeData.aboutCompany.image,
          subImage: homeData.aboutCompany.subImage
        },
        service: {
          title: homeData.service.title,
          btnTitle: homeData.service.btnTitle,
          subTitle: homeData.service.subTitle,
          desc: homeData.service.desc,
          data: homeData.service.data
        },
        blogs: {
          title: homeData.blogs.title,
          btnTitle: homeData.blogs.btnTitle,
          subTitle: homeData.blogs.subTitle,
          desc: homeData.blogs.desc,
          data: homeData.blogs.data
        },
      })
    }
  }, [homeData])

  type IFormData = yup.InferType<typeof adminHomePageSchema>

  const onSave = async (data: IFormData) => {
    try {
      setIsLoading(true)
      const io: any = {
        ...data
      }
      let id = homeData?._id ? homeData?._id : null;
      const token = localStorage.getItem('riskaide_token');
      if (token) {
        const res = await ApiService.saveHomePageDataForAdmin(io, id, token);
        if (!res.isError) {
          utils.showSuccessMessage(res.message)
          setIsLoading(false)
          return null;
        }
      } else {
        setIsLoading(false)
        router.push('/admin/login')
      }
    } catch (ex: any) {
      utils.showErrorMessage(ex.message)
      setIsLoading(false)
    }
  }

  return (
    <>
    {
      isLoading ?
        <PageLoading />
      : ''
    }
    <FormProvider {...objForm}>
      <form onSubmit={objForm.handleSubmit(onSave)}>
        <AdminHeroSection />
        <AdminInsuranceSection />
        <AboutCompanySection />
        <AdminServiceSection />
        <AdminBlogsSection />
        <button
          type="submit"
          className="stickyBtn my-16 bg-primary text-h5 text-white font-bold p-4 rounded-md hover:bg-primaryHover"
        >
          {homeData?._id ? "Update Information" : "Save Information"}
        </button>
      </form>
    </FormProvider>
    </>
  );
}
