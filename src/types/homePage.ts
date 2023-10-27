export interface IInsurance {
  title: string;
  hoverImage: string;
  normalImage: string;
  description: string;
}

export interface IService {
  image: string;
  title: string;
  desc: string;
}

export interface IHeader {
  warningMessage: string;
  btnTitle: string;
  btnLink: string;
  image: string;
}

export interface IBlogs {
  img: string;
  title: string;
}

export interface ITestimonialItem {
  image: string;
  fullName: string;
  review: string;
  _id?: string;
}

export interface ITestimonial {
  title: string;
  subTitle: string;
  desc: string;
  data: ITestimonialItem[];
  btnTitle: string;
}

export interface IAboutCompany {
  title: string;
  subTitle: string;
  missionTitle: string;
  missionDesc: string;
  missionSubDesc: string;
  missionDetails: string[];
  btnTitle: string;
  image: string;
  subImage: string;
}

export interface IClientData {
  image: string;
  _id?: string;
}

export interface IClient {
  data: IClientData[];
  subTitle: string;
  title: string;
}

export interface IFooterData {
  name: string;
  link: string;
  _id?: string;
}

export interface IFooter {
  title: string;
  data: IFooterData[];
}

export interface IContactDetails {
  image: string;
  name: string;
  value: string;
  _id?: string;
}
export interface IFooterCard {
  title: string;
  value: string;
  btnTitle: string;
}

export interface IFooterInfo {
  footerService: IFooter;
  footerCompany: IFooter;
  footerNavigation: IFooter;
  footerCard: IFooterCard;
  contactDetails: IContactDetails[];
  footer: {
    title: string;
    image: string;
    data: [
      {
        iconName: string;
        iconLink: string;
      }
    ];
  };
}

export interface IHomePageInfo {
  aboutCompany: IAboutCompany;
  blogs: {
    title: string;
    subTitle: string;
    desc: string;
    btnTitle: string;
    data: IBlogs[];
  };
  clients: IClient;
  contactDetails: IContactDetails[];
  footer: IFooter[];
  footerCard: {
    title: string;
    value: string;
    btnText: string;
  };
  header: {
    btnLink: string;
    btnTitle: string;
    image: string;
  };
  heroSection: {
    heroTitle: string;
    heroImage: string;
    heroBtnTitle: string;
  };
  insurance: {
    description: string;
    title: string;
    data: {
      title: string;
      hoverImage: string;
      normalImage: string;
      description: string;
    }[];
  };
  service: {
    title: string;
    subTitle: string;
    btnTitle: string;
    data: {
      desc: string;
      image: string;
      title: string;
    }[];
    desc: string;
  };
  testimonial: ITestimonial;
  _id?: string;
}
