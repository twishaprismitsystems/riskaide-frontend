export interface IServiceItem {
  title: string;
  data: {
    image: string;
    title: string;
    desc: string;
  }[];
}

export interface IServicePageInfo {
  header: {
    title: string;
    desc: string;
  };
  title: string;
  desc: string;
  _id?: string;
  lifeInsurance: IServiceItem;
  healthInsurance: IServiceItem;
  travelInsurance: IServiceItem;
  motorInsurance: IServiceItem;
  generalInsurance: IServiceItem;
}
