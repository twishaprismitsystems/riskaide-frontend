import PageLoading from "@/common/PageLoading";
import ApiService from "@/services/ApiService";
import { adminCommonSchema } from "@/services/yupSchema/schemas";
import { ICommonData } from "@/types/commonTypes";
import utils from "@/utils/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from 'yup';
import AdminFooterSection from "../Footer/AdminFooterSection";
import AdminHeaderSection from "../Home/AdminHeader/HeaderSection";
import AdminOurClientSection from "../Home/AdminOurClients/AdminOurClientSection";
import AdminQuote from "../Home/AdminQuote/AdminQuote";
import AdminTestimonialSection from "../Home/AdminTestimonial/AdminTestimonialSection";

const AdminCommonForm = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [commonData, setData] = useState<ICommonData>({} as ICommonData);
  const router = useRouter();

  const loadData = async () => {
    try {
      setIsLoading(true)
      const token = localStorage.getItem('riskaide_token');
      if (token) {
        const res = await ApiService.getCommonPageDataForAdmin(token);
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
      warningMessage: "",
      headerBtnLink: "",
      headerBtnTitle: "",
      headerLogo: "",
      footerCard: {
        btnTitle: "",
        title: "",
        value: ""
      },
      footerCompany: {
        title: "",
        data: [
          {
            link: "",
            name: ""
          },
        ]
      },
      footer: {
        title: "",
        image: "",
        data: [
          {
            iconLink: "",
            iconName: ""
          },
        ]
      },
      footerContactDetails: [
        {
          image: "",
          name: "",
          value: ""
        },
        {
          image: "",
          name: "",
          value: ""
        },
        {
          image: "",
          name: "",
          value: ""
        }
      ],
      footerNavigation: {
        title: "",
        data: [
          {
            link: "",
            name: ""
          }
        ]
      },
      footerService: {
        title: "",
        data: [
          {
            link: "",
            name: ""
          }
        ]
      },
      ourClientData: [
        { image: "" },
      ],
      ourClientSubTitle: "",
      ourClientTitle: "",
      testimonialData: [
        {
          fullName: "",
          image: "",
          review: "",
        }
      ],
      testimonialDesc: "",
      testimonialSubTitle: "",
      testimonialTitle: "",
      quote: {
        btnTitle: "",
        desc: "",
        subTitle: "",
        title: ""
      }
    },
    resolver: yupResolver(adminCommonSchema)
  })

  type IFormData = yup.InferType<typeof adminCommonSchema>

  const onSave = async (data: IFormData) => {
    try {
      setIsLoading(true)
      const io: any = {
        header: {
          image: data.headerLogo,
          btnTitle: data.headerBtnTitle,
          btnLink: data.headerBtnLink,
          warningMessage: data.warningMessage,
        },
        testimonial: {
          title: data.testimonialTitle,
          subTitle: data.testimonialSubTitle,
          desc: data.testimonialDesc,
          data: data.testimonialData,
        },
        clients: {
          title: data.ourClientTitle,
          subTitle: data.ourClientSubTitle,
          data: data.ourClientData
        },
        contactDetails: data.footerContactDetails,
        footerCard: data.footerCard,
        footerCompany: data.footerCompany,
        footerService: data.footerService,
        footerNavigation: data.footerNavigation,
        footer: data.footer,
        quote: data.quote
      }

      let id = commonData?._id ? commonData?._id : null;
      const token = localStorage.getItem('riskaide_token');
      if (token) {
        const res = await ApiService.saveCommonDataForAdmin(io, id, token);
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
    if (commonData && Object.keys(commonData).length > 0) {
      objForm.reset({
        headerBtnLink: commonData.header?.btnLink || "",
        headerBtnTitle: commonData.header.btnTitle || "",
        headerLogo: commonData.header.image || "",
        warningMessage: commonData.header.warningMessage || "",
        footerCard: commonData.footerCard || {
          btnTitle: "",
          title: "",
          value: ""
        },
        footerCompany: {
          title: commonData.footerCompany.title,
          data: commonData.footerCompany.data
        } || {
          title: "", data: [
            {
              link: "",
              name: ""
            }
          ]
        },
        footerContactDetails: commonData.contactDetails || [
          {
            image: "",
            key: "",
            value: ""
          },
          {
            image: "",
            key: "",
            value: ""
          },
          {
            image: "",
            key: "",
            value: ""
          }
        ],
        footerNavigation: {
          title: commonData.footerNavigation.title,
          data: commonData.footerNavigation.data
        } || {
          title: "",
          data: [
            {
              link: "",
              name: ""
            },
          ]
        },
        footerService: {
          title: commonData.footerService.title,
          data: commonData.footerService.data
        } || {
          title: "", data: [
            {
              link: "",
              name: ""
            }
          ]
        },
        footer: {
          title: commonData.footer.title,
          image: commonData.footer.image,
          data: commonData.footer.data
        } || {
          title: "",
          image: "",
          data: [
            {
              iconLink: "",
              iconName: ""
            }
          ]
        },
        ourClientData: commonData.clients.data || [
          { image: "" },
        ],
        ourClientSubTitle: commonData.clients.subTitle || "",
        ourClientTitle: commonData.clients.title || "",
        testimonialData: commonData.testimonial.data || [
          {
            fullName: "",
            image: "",
            review: "",
          }
        ],
        testimonialDesc: commonData.testimonial.desc || "",
        testimonialSubTitle: commonData.testimonial.subTitle || "",
        testimonialTitle: commonData.testimonial.title || "",
        quote: {
          btnTitle: commonData.quote.btnTitle || "",
          desc: commonData.quote.desc || "",
          subTitle: commonData.quote.subTitle || "",
          title: commonData.quote.title || "",
        }
      })
    }
  }, [commonData])

  return (
    <>
    {
      isLoading ?
        <PageLoading />
      : ''
    }
    <FormProvider {...objForm}>
      <form onSubmit={objForm.handleSubmit(onSave)}>
        <AdminHeaderSection />
        <AdminTestimonialSection />
        <AdminQuote />
        <AdminOurClientSection />
        <AdminFooterSection />
        <button
          type="submit"
          className="stickyBtn my-16 bg-primary text-h5 text-white font-bold p-4 rounded-md hover:bg-primaryHover"
        >
          {commonData?._id ? "Update Information" : "Save Information"}
        </button>
      </form>
    </FormProvider>
    </>
  );
};

export default AdminCommonForm;
