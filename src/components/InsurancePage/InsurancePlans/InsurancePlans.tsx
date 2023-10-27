import utils from "@/utils/utils"
import InsuranceCard from "./InsuranceCard"
import { useEffect } from "react";

const InsurancePlans = () => {

    useEffect(() => {
        document.body.className = "about";
    }, []);

    
    return (
        <>
            <section className="py-130">
                <div className="container">
                    <div className="">
                        <div className="heading text-center">
                            <h2>
                                Discover Your Ideal
                                <span className="text-secondary">Insurance Plans</span>
                            </h2>
                            <div className="mb-40">
                                <p>{utils.getContent("Your shield against uncertainty and your key to a worry-free tomorrow")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full">
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-center justify-center">
                            <InsuranceCard />
                            <InsuranceCard />
                            <InsuranceCard />
                            <InsuranceCard />
                            <InsuranceCard />
                            <InsuranceCard />
                            <InsuranceCard />
                            <InsuranceCard />
                            <InsuranceCard />
                            <InsuranceCard />
                            <InsuranceCard />
                            <InsuranceCard />
                        </div>
                        {/* <div className="loadMoreEffect">
                        <button className="bg-primary text-white rounded-20 px-16 py-4">Load More</button>
                        </div> */}
                    </div>
                </div>

            </section>
        </>
    )
}

export default InsurancePlans
