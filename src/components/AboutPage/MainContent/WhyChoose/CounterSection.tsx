import { IProgressInfoItem } from "@/types/aboutPage";
import utils from "@/utils/utils";
import React, { useContext } from "react";
import CountUp from "react-countup";
import { AboutPageContextApi } from "../../AboutPage";

const CounterSection = () => {
  const objItem = useContext(AboutPageContextApi).progressInfo;

  return (
    <React.Fragment>
      <section id="counter_section" className="bg-primary py-100">
        <div className="container container-fluid">
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-12 gap-x-5 xl:gap-3">
            {objItem &&
              objItem.length > 0 &&
              objItem.map((item: IProgressInfoItem, index: number) => (
                <div
                  key={index}
                  className="counter_box flex items-center flex-col xl:flex-row"
                >
                  <div className="counter_icon">
                    <img src={item.image} alt=" riskaide" />
                  </div>
                  <span className="counter_text text-center xl:text-left">
                    <h2 className="text-secondary text-h2 font-extrabold mb-0 counter">
                      <CountUp enableScrollSpy={true} end={item.value} />
                    </h2>
                    <h5 className="text-white mb-0">
                      {utils.getContent(item.key)}
                    </h5>
                  </span>
                </div>
              ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CounterSection;
