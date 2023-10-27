export interface IReview {
  _id?: string;
  image: string;
  fullName: string;
  review: string;
}

export interface ITestimonialSection {
  title: string;
  subTitle: string;
  desc: string;
  data: IReview[];
  btnTitle: string;
}

export interface IClient {
  title: string;
  subTitle: string;
  data: [
    {
      image: string;
    }
  ];
}

export interface IFooterCompany {
  title: string;
  data: [
    {
      name: string;
      link: string;
    }
  ]; // You may want to define a specific structure for this
}

export interface IFooterService {
  title: string;
  data: [
    {
      name: string;
      link: string;
    }
  ]; // You may want to define a specific structure for this
}

export interface IFooterNavigation {
  title: string;
  data: [
    {
      name: string;
      link: string;
    }
  ]; // You may want to define a specific structure for this
}

export interface IFooterCard {
  title: string;
  value: string;
  btnText: string;
}

export interface IContactDetail {
  _id?: string;
  image: string;
  key: string;
  value: string;
}

export interface IFooterItem {
  title: string;
  data: { link: string; name: string }[];
}

export interface ICommonData {
  header: {
    image: string;
    btnTitle: string;
    btnLink: string;
    warningMessage: string;
  };
  testimonial: ITestimonialSection;
  clients: IClient;
  footerCompanyTitle: string;
  footerServiceTitle: string;
  footerNavigationTitle: string;
  footerCompany: IFooterCompany;
  footerService: IFooterService;
  footerNavigation: IFooterNavigation;
  footerCard: IFooterCard;
  contactDetails: IContactDetail[];
  footerItem: IFooterItem[];
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
  quote: {
    btnTitle: string;
    subTitle: string;
    desc: string;
    title: string;
  };
  _id?: string;
}

export interface IQuote {
  btnTitle: string;
  subTitle: string;
  desc: string;
  title: string;
}
