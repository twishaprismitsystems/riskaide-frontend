import React from "react";

const BreadCrumb = (props: { title: string; desc: string }) => {
  return (
    <React.Fragment>
      <section
        id="page_breadcrumb"
        // pt-[6rem] sm:pt-100
        className="page_breadcrumb sm:pt-12 bg-primary"
      >
        <div className="container">
          <div className="flex justify-center">
            <div className="basis-full  md:basis-7/12  text-center">
              <h3 className="page-title text-h3 font-bold text-white mb-10 uppercase">
                {props.title || "N/A"}
              </h3>
              <span className="seprator mb-10"></span>
              <p className="text-white">{props.desc || "N/A"}</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default BreadCrumb;
