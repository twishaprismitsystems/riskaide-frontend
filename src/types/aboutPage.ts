export interface IHeader {
  title: string;
  desc: string;
}

export interface IAboutAuthor {
  title: string;
  desc: string;
  authorImage: string;
  desc1: string;
  desc2: string;
  btnTitle: string;
}

export interface IWhyChooseUsItem {
  title: string;
  desc: string;
  image: string;
}

export interface IWhyChooseUs {
  title: string;
  subTitle: string;
  data: IWhyChooseUsItem[];
}

export interface IProgressInfoItem {
  key: string;
  value: string;
  image: string;
}

export interface IOurTeamMember {
  image: string;
  fullName: string;
  designation: string;
}

export interface IAchievementsItem {
  title: string;
  desc: string;
}

export interface IAchievements {
  title: string;
  desc: string;
  note: string;
  data: IAchievementsItem[];
}

export interface IOurTeam {
  title: string;
  subTitle: string;
  data: IOurTeamMember[];
}

export interface IAboutData {
  _id?: string;
  header: IHeader;
  aboutAuthor: IAboutAuthor;
  whyChooseUs: IWhyChooseUs;
  progressInfo: IProgressInfoItem[];
  ourTeam: IOurTeam;
  achievements: IAchievements;
}