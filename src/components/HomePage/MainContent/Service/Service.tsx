import { IService } from "@/types/homePage";
import utils from "@/utils/utils";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { LandingPageContextApi } from "../../HomePage";

const Service = () => {
  const objItem = useContext(LandingPageContextApi).service;
  const [slidesToShow, setSlidesToShow] = useState<number>(4);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 589) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 980) {
        setSlidesToShow(2);
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
    arrows: true,
    infinite: true,
    centerMode: windowWidth < 624 ? true : false,
    speed: 500,
    autoplay: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
      <section id="service" className="py-130">
        <div className="container">
          <div className="flex flex-wrap md:flex-row">
            <div className="basis-full sm:basis-2/3 md:basis-1/2">
              <div className="heading text-left">
                <h5>{utils.getContent(objItem.title)}</h5>
                <h2 dangerouslySetInnerHTML={{__html:utils.getContent(objItem.subTitle)}} />
                <p>{utils.getContent(objItem.desc)}</p>
              </div>
            </div>
          </div>

          <div className="slider_wrapper">
            <Slider {...options} className="slider_inner slick_slider">
              {objItem.data &&
                objItem.data.length > 0 &&
                objItem.data.map((item: IService, index: number) => (
                  <div key={index} className="slider_item">
                    <button className="card_slide">
                      <Image
                        src={item.image}
                        className="w-full"
                        alt="riskaide.png"
                        fill={true}
                        objectFit="cover"
                      />
                      <div className="card_caption">
                        <h4 className="text-h4 font-bold">
                          {utils.getContent(item.title)}
                        </h4>
                        <p className="text-white">
                          {utils.getContent(item.desc)}
                        </p>
                      </div>
                    </button>
                  </div>
                ))}
            </Slider>
          </div>

          <button className="btn btn-secondary btn-style-2">
            {utils.getContent(objItem.btnTitle)}{" "}
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Service;
