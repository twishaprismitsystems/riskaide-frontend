import { lstTestimonial } from "@/data/Testimonial";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Achievements from "./Achievements";

const AboutPageTestimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState<number>(2);

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
              <h5>Testimonial</h5>
              <h2>
                What our <span className="text-secondary">clients</span> say
              </h2>
              <p>
                Stay ahead of the curve with our latest news on coverage,
                claims, and industry developments:
              </p>
            </div>
            <div className="testimonial_slider">
              <Slider {...options}>
                {lstTestimonial &&
                  lstTestimonial.length > 0 &&
                  lstTestimonial.map((item: any, index: number) => (
                    <div key={index} className="single">
                      <div className="auth_img"> {item.img || ""} </div>
                      <div className="testimonial_content">
                        <h4 className="auth_name text-h4 font-bold">
                          {item.fullName || "N/A"}
                        </h4>
                        <p>{item.review || "N/A"}</p>
                      </div>
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </section>
        <Achievements />
      </section>
    </React.Fragment>
  );
};

export default AboutPageTestimonial;
