import utils from "@/utils/utils";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AboutPageContextApi } from "../../AboutPage";

const AboutAuthor = () => {
  const objItem = useContext(AboutPageContextApi).aboutAuthor;
  
  return (
    <React.Fragment>
      <section className="about_author py-130">
        <div className="container ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0  lg:gap-30">
            <div className="">
              <div className="heading text-left">
                <h2 dangerouslySetInnerHTML={{__html:utils.getContent(objItem.title)}}/>
              </div>
            </div>
            <div className="mb-40">
              <p>{utils.getContent(objItem.desc)}</p>
            </div>
          </div>
          <div className="autor_img overflow-hidden rounded-20 mb-40">
            <img src={objItem.authorImage} alt="Riskaide" className="w-full" />
          </div>
          <p>{utils.getContent(objItem.desc1)}</p>
          <p>{utils.getContent(objItem.desc2)}</p>
          <div className="mt-30">
            <button className="btn btn-secondary btn-style-2">
              {utils.getContent(objItem.btnTitle)}
              <i className="fa-solid fa-arrow-right"/>
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutAuthor;
