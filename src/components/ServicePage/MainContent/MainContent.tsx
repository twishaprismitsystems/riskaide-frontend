import OurClients from "@/components/HomePage/MainContent/OurClients/OurClients";
import BreadCrumb from "@/common/BreadCrumb";
import utils from "@/utils/utils";
import React, { useContext } from "react";
import { ServicePageContextApi } from "../ServicePage";
import CoverageOption from "./CoverageOption/CoverageOption";

const MainContent = () => {
  const objHeader = useContext(ServicePageContextApi).header;
  return (
    <React.Fragment>
      <main>
        <BreadCrumb
          title={utils.getContent(objHeader.title)}
          desc={objHeader.desc}
        />
        <CoverageOption />
        <OurClients />
      </main>
    </React.Fragment>
  );
};

export default MainContent;
