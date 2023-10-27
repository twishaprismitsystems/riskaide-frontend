import utils from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { ServicePageContextApi } from "../../ServicePage";

const CoverageOption = () => {
  const objItem = useContext(ServicePageContextApi);

  return (
    <React.Fragment>
      <section className="pt-24 pb-0 md:py-130" id="Comprehensive">
        <div className="xl:container">
          <div className="grid md:grid-cols-2 heading-con[3rem]">
            <div className="heading text-left">
              <h2 className="text-center md:text-left" dangerouslySetInnerHTML={{__html:utils.getContent(objItem.title)}} />
            </div>
            <div className="heading-text text-center md:text-left">
              <p>{utils.getContent(objItem.desc)}</p>
            </div>
          </div>
        </div>
        <section className="variation_insurance">
          <div className="xl:container">
            <div className="var_insurance_main_row flex flex-col gap-y-6 md:gap-y-[8rem]">
              <div className="variation_insurance_subrow">
                <div className="px-[1.5rem]">
                  <h3 className="text-center sm:text-left font-extrabold text-h3"dangerouslySetInnerHTML={{__html:utils.getContent(objItem.lifeInsurance.title)}} />
                </div>

                <div className="flex flex-wrap var_insurance_item_con">
                  {objItem.lifeInsurance.data &&
                    objItem.lifeInsurance.data.length > 0 &&
                    objItem.lifeInsurance.data.map((item, index: number) => (
                      <div
                        key={index}
                        className="var_insurance_item_box basis-full sm:basis-6/12 md:basis-2/6 lg:basis-1/4"
                      >
                        <Link href="#!" className="var_insurance_item">
                          <Image
                            src={item.image}
                            className=""
                            fill
                            objectFit="cover"
                            alt="riskaide.png"
                          />
                          <div className="var-insurance_caption">
                            <h4 className="text-h4 font-bold text-white">
                              {utils.getContent(item.title)}
                            </h4>
                            <p className="text-white">
                              {utils.getContent(item.desc)}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
              <div className="variation_insurance_subrow">
                <div className="px-[1.5rem]">
                  <h3 className="text-center sm:text-left text-h3 font-extrabold" dangerouslySetInnerHTML={{__html:utils.getContent(objItem.healthInsurance.title)}} />
                </div>

                <div className="flex flex-wrap var_insurance_item_con">
                  {objItem.healthInsurance &&
                    objItem.healthInsurance.data.length > 0 &&
                    objItem.healthInsurance.data.map((item, index: number) => (
                      <div
                        key={index}
                        className="var_insurance_item_box  basis-full sm:basis-6/12 md:basis-2/6 lg:basis-1/4"
                      >
                        <Link href="#!" className="var_insurance_item">
                          <Image
                            src={item.image}
                            fill
                            objectFit="cover"
                            className=""
                            alt="riskaide.png"
                          />
                          <div className="var-insurance_caption">
                            <h4 className="text-h4 font-bold text-white">
                              {utils.getContent(item.title)}
                            </h4>
                            <p className="text-white">
                              {utils.getContent(item.desc)}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
              <div className="variation_insurance_subrow">
                <div className="px-[1.5rem]">
                  <h3 className="text-center sm:text-left font-extrabold text-h3"dangerouslySetInnerHTML={{__html:utils.getContent(objItem.travelInsurance.title)}}  />
                </div>

                <div className="flex flex-wrap var_insurance_item_con">
                  {objItem.travelInsurance &&
                    objItem.travelInsurance.data.length > 0 &&
                    objItem.travelInsurance.data.map((item, index: number) => (
                      <div key={index} className="var_insurance_item_box basis-full sm:basis-6/12 md:basis-2/6 lg:basis-1/4">
                        <Link href="#!" className="var_insurance_item">
                          <Image
                            src={item.image}
                            className=""
                            fill
                            objectFit="cover"
                            alt="riskaide.png"
                          />
                          <div className="var-insurance_caption">
                            <h4 className="text-h4 font-bold text-white">
                              {utils.getContent(item.title)}
                            </h4>
                            <p className="text-white">
                              {utils.getContent(item.desc)}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
              <div className="variation_insurance_subrow">
                <div className="px-[1.5rem]">
                  <h3 className="text-center sm:text-left font-extrabold text-h3" dangerouslySetInnerHTML={{__html:objItem.motorInsurance.title}} />
                </div>

                <div className="flex flex-wrap  var_insurance_item_con">
                  {objItem.motorInsurance &&
                    objItem.motorInsurance.data.length > 0 &&
                    objItem.motorInsurance.data.map((item, index: number) => (
                      <div
                        key={index}
                        className="var_insurance_item_box basis-full sm:basis-6/12 md:basis-2/6 lg:basis-1/4"
                      >
                        <Link href="#!" className="var_insurance_item">
                          <Image
                            src={item.image}
                            className=""
                            fill
                            objectFit="cover"
                            alt="riskaide"
                          />
                          <div className="var-insurance_caption">
                            <h4 className="text-h4 font-bold text-white">
                              {utils.getContent(item.title)}
                            </h4>
                            <p className="text-white">
                              {utils.getContent(item.desc)}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
              <div className="variation_insurance_subrow">
                <div className="px-[1.5rem]">
                  <h3 className="text-center sm:text-left text-h3 font-extrabold" dangerouslySetInnerHTML={{__html:utils.getContent(objItem.generalInsurance.title)}}/>
                </div>

                <div className="flex flex-wrap var_insurance_item_con">
                  {objItem.generalInsurance &&
                    objItem.generalInsurance.data.length > 0 &&
                    objItem.generalInsurance.data.map((item, index: number) => (
                      <div
                        key={index}
                        className="var_insurance_item_box basis-full sm:basis-6/12 md:basis-2/6 lg:basis-1/4"
                      >
                        <Link href="#!" className="var_insurance_item">
                          <Image
                            src={item.image}
                            className=""
                            fill
                            objectFit="cover"
                            alt="riskaide.png"
                          />
                          <div className="var-insurance_caption">
                            <h4 className="text-h4 font-bold text-white">
                              {utils.getContent(item.title)}
                            </h4>
                            <p className="text-white">
                              {utils.getContent(item.desc)}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default CoverageOption;
