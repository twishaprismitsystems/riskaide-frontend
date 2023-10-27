import PageLoading from "@/common/PageLoading";
import ApiService from "@/services/ApiService";
import { adminAboutSchema } from "@/services/yupSchema/schemas";
import { IAboutData } from "@/types/aboutPage";
import utils from "@/utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from 'yup';

import AboutHeaderSection from './Header/Header'
import AboutAutherSection from './Auther/Auther'
import AboutChooseUsSection from './ChooseUs/ChooseUs'
import ProgressInfoSection from './ProgressInfo/ProgressInfo'
import OurTeamSection from './OurTeam/OurTeam'
import Achivements from './Achivements/Achivements'

const AdminAbout = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aboutData, setData] = useState<IAboutData>({} as IAboutData);
  const router = useRouter();

  const loadData = async () => {
    try {
      setIsLoading(true)
      const token = localStorage.getItem('riskaide_token');
      if (token) {
        const res = await ApiService.getAboutPageDataForAdmin(token);
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
      header: {
        title: "",
        desc: "",
      },
      aboutAuthor: {
        title: "",
        desc: "",
        authorImage: "",
        desc1: "",
        desc2: "",
        btnTitle: "",
      },
      whyChooseUs: {
        title: "",
        subTitle: "",
        data: [
          {
            title: "",
            desc: "",
            image: "",
          },
        ],
      },
      progressInfo: [
        {
          key: "",
          value: "",
          image: "",
        },
      ],
      ourTeam: {
        title: "",
        subTitle: "",
        data: [{ image: "", fullName: "", designation: "" }],
      },
      achievements: {
        title: "",
        desc: "",
        note: "",
        data: [
          {
            title: "",
            desc: "",
          },
        ],
      },
    },
    resolver: yupResolver(adminAboutSchema)
  })

  type IFormData = yup.InferType<typeof adminAboutSchema>

  const onSave = async (data: IFormData) => {
    try {
      setIsLoading(true);
      const io: any = {
        ...data
      }
      let id = aboutData?._id ? aboutData?._id : null;
      const token = localStorage.getItem('riskaide_token');
      if (token) {
        const res = await ApiService.saveAboutPageDataForAdmin(io, id, token);
        if (!res.isError) {
          utils.showSuccessMessage(res.message)
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        router.push('/admin/login')
      }
    } catch (ex: any) {
      setIsLoading(false);
      utils.showErrorMessage(ex.message)

    }
  }

  useEffect(() => {
    if (aboutData && Object.keys(aboutData).length > 0) {
      objForm.reset({
        header: {
          title: aboutData.header.title,
          desc: aboutData.header.desc,
        },
        aboutAuthor: {
          title: aboutData.aboutAuthor.title,
          desc: aboutData.aboutAuthor.desc,
          authorImage: aboutData.aboutAuthor.authorImage,
          desc1: aboutData.aboutAuthor.desc1,
          desc2: aboutData.aboutAuthor.desc2,
          btnTitle: aboutData.aboutAuthor.btnTitle,
        },
        whyChooseUs: {
          title: aboutData.whyChooseUs.title,
          subTitle: aboutData.whyChooseUs.subTitle,
          data: aboutData.whyChooseUs.data
        },
        progressInfo: aboutData.progressInfo,
        ourTeam: {
          title: aboutData.ourTeam.title,
          subTitle: aboutData.ourTeam.subTitle,
          data: aboutData.ourTeam.data,
        },
        achievements: {
          title: aboutData.achievements.title,
          desc: aboutData.achievements.desc,
          note: aboutData.achievements.note,
          data: aboutData.achievements.data 
        },
      })
    }
  }, [aboutData])

  return (
    <>
    {
      isLoading ?
        <PageLoading />
      : ''
    }
    <FormProvider {...objForm}>
      <form onSubmit={objForm.handleSubmit(onSave)}>
        <AboutHeaderSection />
        <AboutAutherSection />
        <AboutChooseUsSection />
        <ProgressInfoSection />
        <OurTeamSection />
        <Achivements />
        <button
          type="submit"
          className="stickyBtn my-16 bg-primary text-h5 text-white font-bold p-4 rounded-md hover:bg-primaryHover"
        >
          {aboutData?._id ? "Update Information" : "Save Information"}
        </button>
      </form>
    </FormProvider>
    </>
  );
};

export default AdminAbout;
