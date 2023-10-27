import OurClients from "@/components/HomePage/MainContent/OurClients/OurClients";
import Testimonial from "@/components/HomePage/MainContent/Testimonial/Testimonial";
import BreadCrumb from "@/common/BreadCrumb";
import utils from "@/utils/utils";
import React, { useContext } from "react";
import { AboutPageContextApi } from "../AboutPage";
import AboutAuthor from "./AboutAuthor/AboutAuthor";
import OurTeam from "./OurTeam/OurTeam";
import WhyChoose from "./WhyChoose/WhyChoose";

const MainContent = () => {
  const objHeader = useContext(AboutPageContextApi).header;

  return (
    <React.Fragment>
      <main>
        <BreadCrumb
          title={utils.getContent(objHeader?.title)}
          desc={utils.getContent(objHeader?.desc)}
        />
        <AboutAuthor />
        <WhyChoose />
        <OurTeam />
        {/* <AboutPageTestimonial /> */}
        <Testimonial isAboutPage={true} />
        <OurClients />
      </main>
    </React.Fragment>
  );
};

export default MainContent;
