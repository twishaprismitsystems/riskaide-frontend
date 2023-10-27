import { IOurTeamMember } from "@/types/aboutPage";
import utils from "@/utils/utils";
import React, { useContext } from "react";
import { AboutPageContextApi } from "../../AboutPage";

const OurTeam = () => {
  const objItem = useContext(AboutPageContextApi).ourTeam;

  return (
    <React.Fragment>
      <section id="our_team" className="sm:py-130 pb-0 pt-130">
        <div className="heading text-center">
          <h5>{utils.getContent(objItem.title)}</h5>
          <h2 dangerouslySetInnerHTML={{__html:utils.getContent(objItem.subTitle)}} />
        </div>
        <div className="lg:container">
          <div className="grid sm:grid-cols-4  team_card_con">
            {objItem.data &&
              objItem.data.length > 0 &&
              objItem.data.map((item: IOurTeamMember, index: number) => (
                <div className="team_card_box_con" key={index}>
                  <div className="team_card_box">
                    <div className="team-card border border-1 border-black">
                      <img
                        src={item.image}
                        alt=" riskaide"
                        className="w-full block"
                      />
                      <div className="overlay text-center">
                        <div className="overlay_text">
                          <h4 className="text-h4 font-bold text-white">
                            {utils.getContent(item.fullName)}
                          </h4>
                          <p className="text-[#D9D9D9]">
                            {utils.getContent(item.designation)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="team_share_icon">
                    <i className="fa-solid fa-share-nodes"></i>
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default OurTeam;
