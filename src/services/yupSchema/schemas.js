import * as yup from "yup";

export const adminHomePageSchema = yup.object({
  heroSection: yup.object({
    heroTitle: yup.string().required("Hero title is required."),
    heroImage: yup.string().required("Hero Image is required."),
    heroBtnTitle: yup.string().required("Hero button title is required"),
  }),
  insurance: yup.object({
    title: yup.string().required("insurance title is required."),
    description: yup.string().required("insurance description is required."),
    data: yup.array().of(
      yup.object({
        normalImage: yup.string().required(),
        hoverImage: yup.string().required(),
        title: yup.string().required(),
        description: yup.string().required(),
      })
    ),
  }),
  aboutCompany: yup.object({
    title: yup.string().required(),
    subTitle: yup.string().required(),
    missionTitle: yup.string().required(),
    missionDesc: yup.string().required(),
    missionSubDesc: yup.string().required(),
    missionDetails: yup.array().required(),
    btnTitle: yup.string().required(),
    image: yup.string().required("This field is required."),
    subImage: yup.string().required("This field is required."),
  }),
  service: yup.object({
    title: yup.string().required(),
    subTitle: yup.string().required(),
    desc: yup.string().required(),
    btnTitle: yup.string().required(),
    data: yup.array().of(
      yup.object().shape({
        image: yup.string().required(),
        title: yup.string().required(),
        desc: yup.string().required(),
      })
    ),
  }),
  blogs: yup.object({
    title: yup.string().required(),
    subTitle: yup.string().required(),
    desc: yup.string().required(),
    btnTitle: yup.string().required(),
    data: yup.array().of(
      yup.object({
        img: yup.string().required(),
        title: yup.string().required(),
      })
    ),
  }),
});

export const adminAboutSchema = yup.object({
  header: yup.object({
    title: yup.string().required(),
    desc: yup.string().required(),
  }),
  aboutAuthor: yup.object({
    title: yup.string().required(),
    desc: yup.string().required(),
    authorImage: yup.string().required(),
    desc1: yup.string().required(),
    desc2: yup.string().required(),
    btnTitle: yup.string().required(),
  }),
  whyChooseUs: yup.object({
    title: yup.string().required(),
    subTitle: yup.string().required(),
    data: yup.array().of(
      yup.object({
        title: yup.string().required(),
        desc: yup.string().required(),
        image: yup.string().required(),
      })
    ),
  }),
  progressInfo: yup.array().of(
    yup.object({
      key: yup.string().required(),
      value: yup.string().required(),
      image: yup.string().required(),
    })
  ),
  ourTeam: yup.object({
    title: yup.string().required(),
    subTitle: yup.string().required(),
    data: yup.array().of(
      yup.object({
        image: yup.string().required(),
        fullName: yup.string().required(),
        designation: yup.string().required(),
      })
    ),
  }),
  achievements: yup.object({
    title: yup.string().required(),
    desc: yup.string().required(),
    note: yup.string().required(),
    data: yup.array().of(
      yup.object({
        title: yup.string().required(),
        desc: yup.string().required(),
      })
    ),
  }),
});

export const adminCommonSchema = yup.object({
  headerLogo: yup.string().required("Image is required"),
  warningMessage: yup.string().required("Warning message is required"),
  headerBtnTitle: yup.string().required("Header button title is required"),
  headerBtnLink: yup.string().required("Header button link is required"),
  testimonialTitle: yup.string().required("Testimonial title is required"),
  testimonialSubTitle: yup
    .string()
    .required("Testimonial subtitle is required"),
  testimonialDesc: yup.string().required("Testimonial description is required"),
  testimonialData: yup.array().of(
    yup.object().shape({
      image: yup.string().required("Testimonial image is required"),
      fullName: yup.string().required("Full name is required"),
      review: yup.string().required("Review is required"),
    })
  ),
  ourClientTitle: yup.string().required("Our client title is required"),
  ourClientSubTitle: yup.string().required("Our client subtitle is required"),
  ourClientData: yup.array().of(
    yup.object().shape({
      image: yup.string().required("Client image is required"),
    })
  ),
  footerCard: yup.object().shape({
    title: yup.string().required("Footer card title is required"),
    value: yup.string().required("Footer card value is required"),
    btnTitle: yup.string().required("Footer card button title is required"),
  }),
  footerCompany: yup.object().shape({
    title: yup.string().required("Footer company title is required"),
    data: yup.array().of(
      yup.object().shape({
        name: yup.string().required("Company name is required"),
        link: yup.string().required("Company link is required"),
      })
    ),
  }),
  footerService: yup.object().shape({
    title: yup.string().required("Footer service title is required"),
    data: yup.array().of(
      yup.object().shape({
        name: yup.string().required("Service name is required"),
        link: yup.string().required("Service link is required"),
      })
    ),
  }),

  footerNavigation: yup.object().shape({
    title: yup.string().required("Footer navigation title is required"),
    data: yup.array().of(
      yup.object().shape({
        name: yup.string().required("Navigation name is required"),
        link: yup.string().required("Navigation link is required"),
      })
    ),
  }),
  footer: yup.object().shape({
    title: yup.string().required("Footer title is required"),
    image: yup.string().required("Footer image is required"),
    data: yup.array().of(
      yup.object().shape({
        iconName: yup.string().required("Icon name is required"),
        iconLink: yup.string().required("Icon link is required"),
      })
    ),
  }),
  footerContactDetails: yup.array().of(
    yup.object().shape({
      image: yup.string().required("Contact detail image is required"),
      name: yup.string().required("Contact detail name is required"),
      value: yup.string().required("Contact detail value is required"),
    })
  ),

  quote: yup.object({
    title: yup.string().required(),
    subTitle: yup.string().required(),
    desc: yup.string().required(),
    btnTitle: yup.string().required(),
  }),
});

export const adminServiceSchema = yup.object({
  title: yup.string().required(),
  desc: yup.string().required(),
  header: yup.object({
    title: yup.string().required(),
    desc: yup.string().required(),
  }),
  lifeInsurance: yup.object({
    title: yup.string().required(),
    data: yup.array().of(
      yup.object().shape({
        image: yup.string().required(),
        title: yup.string().required(),
        desc: yup.string().required(),
      })
    ),
  }),
  healthInsurance: yup.object({
    title: yup.string().required(),
    data: yup.array().of(
      yup.object().shape({
        image: yup.string().required(),
        title: yup.string().required(),
        desc: yup.string().required(),
      })
    ),
  }),
  travelInsurance: yup.object({
    title: yup.string().required(),
    data: yup.array().of(
      yup.object().shape({
        image: yup.string().required(),
        title: yup.string().required(),
        desc: yup.string().required(),
      })
    ),
  }),
  motorInsurance: yup.object({
    title: yup.string().required(),
    data: yup.array().of(
      yup.object().shape({
        image: yup.string().required(),
        title: yup.string().required(),
        desc: yup.string().required(),
      })
    ),
  }),
  generalInsurance: yup.object({
    title: yup.string().required(),
    data: yup.array().of(
      yup.object().shape({
        image: yup.string().required(),
        title: yup.string().required(),
        desc: yup.string().required(),
      })
    ),
  }),
});
