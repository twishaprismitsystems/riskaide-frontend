import utils from "@/utils/utils";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useContext } from "react";
import heroBanner from "../../../../../public/assets/img/hero_banner.png";
import innerCircleImage from "../../../../../public/assets/img/inner-circle.png";
import roundedTextImage from "../../../../../public/assets/img/rounded_text.png";
import { LandingPageContextApi } from "../../HomePage";

const Hero = () => {
  const objItem = useContext(LandingPageContextApi).heroSection;

  return (
    <React.Fragment>
      <section id="hero_section" className="bg-primary relative">
        <span className="hero-prop1 absolute block -top-[0%] -left-[0%] h-auto">
          <svg
            width={335}
            height={160}
            viewBox="0 0 335 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x={334.5}
              y={-97.5}
              width={257}
              height={493}
              rx={128.5}
              transform="rotate(90 334.5 -97.5)"
              stroke="#009936"
            />
          </svg>
        </span>

        <div className="container max-w-full">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-5">
            {/* add basis-2/4 if something not good here */}
            <div className="basis-full lg:basis-1/2 left-col">
              <h1 className="text-h1 font-black uppercase text-center md:text-left" dangerouslySetInnerHTML={{__html:utils.getContent(objItem.heroTitle)}}/>
            </div>
            <div className="right-col basis-full lg:basis-auto">
              <div className="image_col overflow-hidden relative inline-block">
                <img alt="hero_banner.png" src={utils.getContent(objItem.heroImage)} />
              </div>
              <div className="stemp absolute bottom-0 left-0">
                <Image
                  src={roundedTextImage}
                  alt="rounded_text.png"
                  style={{
                    width: "14rem",
                    height: "14rem",
                  }}
                  className="cr-1"
                />
                <Image
                  src={innerCircleImage}
                  style={{
                    width: "9.3rem",
                    height: "9.3rem",
                  }}
                  alt="inner-circle.png"
                  className="cr-2"
                />
              </div>
            </div>
          </div>
          <div className="hero_actions mt-14 md:mt-0 text-center md:text-left">
            <button
              onClick={() => {
                utils.scrollToView("insurance");
              }}
              className="button_link text-white uppercase flex items-center"
            >
              <i className="fa-solid fa-arrow-down fa-bounce"></i>
              {utils.getContent(objItem.heroBtnTitle)}
            </button>
          </div>
        </div>
        <span className="hero-prop2">
          <svg
            width="230"
            height="145"
            viewBox="0 0 230 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="229.5"
              y="17.5"
              width="127"
              height="229"
              rx="63.5"
              transform="rotate(90 229.5 17.5)"
              stroke="#009936"
            />
            <circle cx="98" cy="17" r="17" fill="#009936" />
          </svg>
        </span>
      </section>
    </React.Fragment>
  );
};

export default Hero;
