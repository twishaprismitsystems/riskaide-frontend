import React from "react";

const Achievements = () => {
  return (
    <React.Fragment>
      <section id="acchivments-section" className="bg-tertiary py-100">
        <div className="container">
          <div className="grid lg:grid-cols-3 grid-cols-2   acchivments-con">
            <div className="col-span-2 lg:col-auto">
              <h2 className="text-h2 font-bold">Achievements</h2>
              <p>
                At Riskaide, we are proud to celebrate our numerous achievements
                and milestones in the insurance industry. Through our commitment
                to excellence and a customer-centric approach, we have
                accomplished significant feats that highlight our dedication to
                providing exceptional service and reliable insurance solutions.
              </p>
            </div>
            <div className="col-span-2 popular_acchivemnt">
              <h4 className="text-h4 font-bold lg:mb-[37px] text-black">
                Here are some of our notable achievements:
              </h4>
              <div className="grid grid-cols-2 pop_acchive_box_con">
                <div className="pop_acchive_box">
                  <div className="pop_acchive_text">
                    <h4 className="mb-2.5 text-h4 font-bold text-secondary">
                      Customer Satisfaction:
                    </h4>
                    <p>
                      Our unwavering focus on customer satisfaction has earned
                      us a strong reputation for delivering exceptional service.
                    </p>
                  </div>
                  <div className="pop_acchive_text pop_acchive_text_2">
                    <h4 className="mb-2.5 text-h4 font-bold text-secondary">
                      Industry Recognition:
                    </h4>
                    <p>
                      We have been recognized by industry leaders and
                      organizations for our outstanding contributions to the
                      insurance sector.
                    </p>
                  </div>
                </div>
                <div className="pop_acchive_box">
                  <div className="pop_acchive_text">
                    <h4 className="mb-2.5 text-h4 font-bold text-secondary">
                      Growth and Expansion:
                    </h4>
                    <p>
                      We have experienced significant growth and expansion, both
                      in terms of our client base and our range of insurance
                      products.
                    </p>
                  </div>
                  <div className="pop_acchive_text pop_acchive_text_2">
                    <h4 className="mb-2.5 text-h4 font-bold text-secondary">
                      Partnerships and Collaborations:
                    </h4>
                    <p>
                      We have fostered strong partnerships and collaborations
                      within the insurance industry. By working closely with
                      reputable insurance carriers and industry professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Achievements;
