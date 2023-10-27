import utils from "@/utils/utils";
import Image from "next/image";
import React, { useContext } from "react";
import aboutOneImage from "../../../../../public/assets/img/about_1.png";
import aboutTwoImage from "../../../../../public/assets/img/about_2.png";
import { LandingPageContextApi } from "../../HomePage";

const AboutCompany = () => {
  const objItem = useContext(LandingPageContextApi).aboutCompany;

  return (
    <React.Fragment>
      <section id="about">
        <span className="about_prop_1">
          <img src="assets/img/about_prop.svg" width="" height="" />
        </span>
        <div className="container">
          <div className="heading text-center">
            <h5>{utils.getContent(objItem.title)}</h5>
            <h2 dangerouslySetInnerHTML={{__html:utils.getContent(objItem.subTitle)}}/>
          </div>

          <div className="flex flex-wrap md:flex-row  about_inner items-start ">
            <div className="basis-full md:basis-1/2 image_col">
              <div className="image_1">
                <img src={utils.getContent(objItem.image)} alt="aboutOne.png" />
              </div>
              <div className="image_2">
                <img src={utils.getContent(objItem.subImage)}  alt="aboutTwo.png" />
              </div>
            </div>
            <div className="basis-full md:basis-1/2 content_col sm:p-[15px]">
              <h4 className="text-h4 font-extrabold">Our Mission:</h4>
              <p>{utils.getContent(objItem.missionDesc)}</p>
              <p>{utils.getContent(objItem.missionSubDesc)}</p>
              <ul className="about_list">
                {objItem.missionDetails &&
                  objItem.missionDetails.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>

              <button className="btn btn-secondary btn-style-2">
                {utils.getContent(objItem.btnTitle)}
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutCompany;
