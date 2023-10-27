import { insuranceList } from "@/data/Insurance";
import { IInsurance } from "@/types/homePage";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { LandingPageContextApi } from "../../HomePage";
import utils from "@/utils/utils";

const Insurance = () => {
  const objItem = useContext(LandingPageContextApi).insurance;

  const [slidesToShow, setSlidesToShow] = useState<number>(4);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 589) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 670) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 950) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1240) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 2000) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    centerMode:
      windowWidth < 440 || (windowWidth < 670 && windowWidth > 589)
        ? true
        : false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
      <section id="insurance" className="py-130">
        <div className="container">
          <div className="flex flex-wrap md:flex-row">
            <div className="basis-full md:basis-1/2">
              <div className="">
                <h2 className=" text-h2 font-extrabold " dangerouslySetInnerHTML={{__html:utils.getContent(objItem.title)}}/>
                <p>{utils.getContent(objItem.description)}</p>
              </div>
            </div>
          </div>

          <div className="insurance_slider" id="features">
            <Slider {...options}>
              {objItem.data &&
                objItem.data.length > 0 &&
                objItem.data.map((item: IInsurance, index: number) => (
                  <div
                    key={index}
                    className="feature_item feature_item_min_height bg-secondary hover:bg-primary"
                  >
                    <div className="fea_icon">
                      <Image
                        src={item.normalImage}
                        className="defult_icon"
                        fill={true}
                        objectFit="none"
                        alt={"riskAide.png"}
                      />
                      <Image
                        src={item.hoverImage}
                        className="hover_icon"
                        fill={true}
                        objectFit="none"
                        alt={"riskAide.png"}
                      />
                    </div>
                    <div className="fea_title">
                      <h4 className="text-h4 font-bold text-white">
                        {utils.getContent(item.title)}
                      </h4>
                    </div>
                    <div className="fea_discription">
                      <p className="text-white">
                        {utils.getContent(item.description)}
                      </p>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Insurance;
