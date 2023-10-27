import { IWhyChooseUsItem } from "@/types/aboutPage";
import utils from "@/utils/utils";
import React, { useContext } from "react";
import { AboutPageContextApi } from "../../AboutPage";
import CounterSection from "./CounterSection";

const WhyChoose = () => {
  const objItem = useContext(AboutPageContextApi).whyChooseUs;

  return (
    <React.Fragment>
      <section id="Why_choose" className="bg-tertiary pt-130">
        <div className="heading text-center">
          <h2 className="text-h2 font-extrabold">
            {utils.getContent(objItem.title)}
          </h2>
          <p>{utils.getContent(objItem.subTitle)}</p>
        </div>
        <div className="container">
          <div className="why_choose_con grid">
            <div className="grid md:grid-cols-2 why-choose_grid">
              {objItem.data &&
                objItem.data.length > 0 &&
                objItem.data.map((item: IWhyChooseUsItem, index: number) => {
                  if (index % 2 == 0) {
                    return (
                      <div key={index} className="flex Why_choose_box_con ">
                        <div className="Why_choose_box Why_choose_box_odd text-right order-1 lg:order-none bg-white">
                          <h4 className="text-h4 font-bold">
                            {utils.getContent(item.title)}
                          </h4>
                          <p>{utils.getContent(item.desc)}</p>
                        </div>
                        <div className="icon__box icon__box_odd">
                          <div className="choose_icon">
                            <img src={item.image} alt=" riskaide" />
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className="flex Why_choose_box_con">
                        <div className="icon__box icon__box_odd">
                          <div className="choose_icon">
                            <img src={item.image} alt="riskaideF" />
                          </div>
                        </div>
                        <div className="Why_choose_box Why_choose_box_even text-left bg-white">
                          <h4 className="text-h4 font-bold">
                            {utils.getContent(item.title)}
                          </h4>
                          <p>{utils.getContent(item.desc)}</p>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
        <CounterSection />
      </section>
    </React.Fragment>
  );
};

export default WhyChoose;
