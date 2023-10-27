import ApiService from "@/services/ApiService";
import { IClient, IClientData } from "@/types/homePage";
import utils from "@/utils/utils";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const OurClients = () => {
  const [slidesToShow, setSlidesToShow] = useState<number>(4);
  const [result, setResult] = useState<IClient | null>(null);

  const loadData = async () => {
    try {
      const res = await ApiService.getClients();
      if (!res.isError) {
        setResult(res.data[0]?.clients);
        return null;
      }
    } catch (ex: any) {
      utils.showErrorMessage(ex.message);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 540) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 730) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 980) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(5);
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
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
      <section id="clients" className="py-130">
        <div className="container">
          <div className="heading  text-left ">
            <h5>{utils.getContent(result?.title)}</h5>
            <h2 dangerouslySetInnerHTML={{ __html: result?.subTitle || "" }} />
          </div>

          <Slider {...options} className="client_slider relative">
            {result?.data &&
              result?.data.length > 0 &&
              result?.data.map((item: IClientData) => (
                <div key={item._id}>
                  <img src={item.image} alt="client_logo.png" />
                </div>
              ))}
          </Slider>
        </div>
      </section>
    </React.Fragment>
  );
};

export default OurClients;
