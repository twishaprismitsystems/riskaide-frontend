import ApiService from "@/services/ApiService";
import { IFooterItem } from "@/types/commonTypes";
import { IContactDetails, IFooter, IFooterData, IFooterInfo } from "@/types/homePage";
import utils from "@/utils/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [result, setResult] = useState<IFooterInfo | null>(null);
  const [footerNavigation, setFooterNavigation] = useState<IFooter[] | null>(null)

  const loadData = async () => {
    try {
      const res = await ApiService.getFooterInfo();
      if (!res.isError) {
        const info = res?.data[0]
        setResult(res.data[0]);
        let objItem = [
          {
            title: info.footerCompany.title,
            data: info.footerCompany.data,
          },
          {
            title: info.footerService.title,
            data: info.footerService.data,
          },
          {
            title: info.footerNavigation.title,
            data: info.footerNavigation.data,
          },
        ]

        setFooterNavigation(objItem)
        return null;
      }

      throw new Error(res.message);
    } catch (ex: any) {
      utils.showErrorMessage(ex.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);


  return (
    <React.Fragment>
      <footer>
        <section className="contact_section">
          <div className="container">
            <div className="contact_info w-full">
              <div className="contact_info_con flex  flex-wrap md:flex-nowrap gap-8">
                {result?.contactDetails &&
                  result?.contactDetails.length > 0 &&
                  result?.contactDetails.map(
                    (item: IContactDetails, index: number) => (
                      <div key={item._id} className="basis-full  md:basis-1/3">
                        <div className="c_col flex items-center gap-8">
                          <div className="c_icon">
                            <img src={item.image} width="" height="" alt="" />
                          </div>
                          <div className="c_text">
                            <h4 className="text-h4 text-white font-bold">
                              {utils.getContent(item.name)}
                            </h4>
                            <p>{utils.getContent(item.value)}</p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>
          </div>
        </section>
        <section className="footer_section bg-primary">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              {footerNavigation &&
                footerNavigation.length > 0 &&
                footerNavigation.map((item: IFooterItem, index: number) => (
                  <div key={index}>
                    <h4 className="text-h4 font-medium uppercase text-white">
                      {utils.getContent(item.title)}
                    </h4>
                    <ul className="text-white list-disc  leading-loose font-normal">
                      {item.data &&
                        item.data.length > 0 &&
                        item.data.map((objItem: IFooterData, objIndex: number) => (
                          <li key={objIndex}>
                            <Link href={utils.getLink(objItem.link)}>
                              {utils.getContent(objItem.name)}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              <div className="">
                <div className="estimate">
                  <h3 className="text-h3 text-white font-extrabold">
                    {utils.getContent(result?.footerCard?.title)}
                  </h3>
                  <h2 className=" text-white font-extrabold">
                    {utils.getContent(result?.footerCard?.value)}
                  </h2>
                  <Link href="#!" className="text-white text-h4 go-to-contact">
                    {utils.getContent(result?.footerCard?.btnTitle)}{" "}
                    <i className="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sub_footer bg-primary py-8">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-10 ">
              <div className="r-text w-full text-center sm:text-left order-last sm:order-first ">
                <p className="text-white">{utils.getContent(result?.footer.title)}</p>
              </div>
              <div className="r-logo w-full text-center order-none">
                <Link href="/">
                  <img
                    src={result?.footer.image}
                    width="145"
                    alt="riskaide"
                    className="mx-auto"
                  />
                </Link>
              </div>
              <div className="social_media w-full text-right flex gap-8 justify-center sm:justify-end sm:order-last order-first">
                {result?.footer?.data.map((item, index: number) => {
                  const domainName = item.iconLink.replace(/(^\w+:|^)\/\//, '');
                  return (
                    <Link key={index} href={`/${domainName}`}>
                      <i className={item.iconName} />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
