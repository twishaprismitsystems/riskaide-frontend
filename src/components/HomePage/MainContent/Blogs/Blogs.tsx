import { IBlogs } from "@/types/homePage";
import utils from "@/utils/utils";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { LandingPageContextApi } from "../../HomePage";

const Blogs = () => {
  const objItem = useContext(LandingPageContextApi).blogs;
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
    autoplay: true,
    centerMode: windowWidth < 624 ? true : false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
      <section id="blogs" className="">
        <div className="container">
          <div className="flex flex-wrap md:flex-row">
            <div className="basis-full sm:basis-1/3 md:basis-1/2"></div>
            <div className="basis-full sm:basis-2/3 md:basis-1/2">
              <div className="heading  md:text-right">
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
                objItem.data.map((item: IBlogs, index: number) => (
                  <div key={index} className="slider_item">
                    <button className="card_slide">
                      <Image
                        src={item.img}
                        className="w-full"
                        fill={true}
                        objectFit="cover"
                        alt="riskaide"
                      />
                      <div className="card_caption">
                        <h4 className="text-h4 text-white font-medium">
                          {utils.getContent(item.title)}
                        </h4>
                      </div>
                    </button>
                  </div>
                ))}
            </Slider>
          </div>
          <div className="block text-right">
            <button className=" btn btn-secondary btn-style-2 ">
              {utils.getContent(objItem.btnTitle)}{" "}
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Blogs;
