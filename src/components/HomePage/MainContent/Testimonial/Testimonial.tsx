import Achievements from "@/components/AboutPage/MainContent/AboutPageTestimonial/Achievements";
import ApiService from "@/services/ApiService";
import { ITestimonial, ITestimonialItem } from "@/types/homePage";
import utils from "@/utils/utils";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import FreeQuote from "./FreeQuote";

const Testimonial = (props: { isAboutPage?: boolean }) => {
  const [slidesToShow, setSlidesToShow] = useState<number>(2);
  const [result, setResult] = useState<ITestimonial | null>(null);

  const loadData = async () => {
    try {
      const res = await ApiService.getTestimonialInfo();
      if (!res.isError) {
        setResult(res.data[0]?.testimonial);
        return null;
      }

      throw new Error(res.message);
    } catch (ex: any) {
      utils.showErrorMessage(ex.message);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1239) {
        setSlidesToShow(1);
      } else if (window.innerWidth > 1240) {
        setSlidesToShow(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  const options = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
      <section id="" className="mt-130 ">
        <section className="section-dark py-100" id="testimonial">
          <div className="container">
            <div className="heading  text-center">
              <h5>{utils.getContent(result?.title)}</h5>
              <h2 dangerouslySetInnerHTML={{ __html: utils.getContent(result?.subTitle) }} />
              <p>{utils.getContent(result?.desc)}</p>
            </div>
            <div className="testimonial_slider">
              <Slider {...options}>
                {result?.data &&
                  result?.data.length > 0 &&
                  result?.data.map((item: ITestimonialItem, index: number) => (
                    <div key={index} className="single">
                      <div className="auth_img">
                        <img src={item.image} alt="image.png" />
                      </div>
                      <div className="testimonial_content">
                        <h4 className="auth_name text-h4 font-bold">
                          {utils.getContent(item.fullName)}
                        </h4>
                        <p>{utils.getContent(item.review)}</p>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </section>
        {props.isAboutPage ? (
          <Achievements />
        ) : (
          <FreeQuote />
        )}
      </section>
    </React.Fragment>
  );
};

export default Testimonial;
