import React from "react";

const AboutBreadCrumb = () => {
  return (
    <React.Fragment>
      <section
        id="page_breadcrumb"
        // pt-[6rem] sm:pt-100
        className="page_breadcrumb bg-primary pt-[12rem] sm:pt-[20rem] pb-70"
      >
        <div className="container">
          <div className="flex justify-center">
            <div className="basis-full  md:basis-7/12  text-center">
              <h3 className="page-title text-h3 font-bold text-white mb-10 uppercase">
                ABOUT US
              </h3>
              <span className="seprator mb-10"></span>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutBreadCrumb;
