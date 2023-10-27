import ApiService from "@/services/ApiService";
import { IQuote } from "@/types/commonTypes";
import utils from "@/utils/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FreeQuote = () => {
    const router = useRouter();
    const [objItem, setObjItem] = useState<IQuote>({} as IQuote)

    const loadData = async () => {
        try {
            const token = localStorage.getItem('riskaide_token');
            if (token) {

                const res = await ApiService.getCommonPageDataForAdmin(token);
                setObjItem(res.data?.quote)
            } else {
                router.push('/admin/login')
            }
        } catch (ex: any) {
            utils.showErrorMessage(ex.message)
        }
    }

    useEffect(() => {
        loadData();
    }, [])



    if (!objItem) return null; 
    return (
        <>
            <section id="quote" className="bg-tertiary py-100">
                <div className="container">
                    <div className="heading  text-center mb-14">
                        <h5>{utils.getContent(objItem.title)}</h5>
                        <h2 dangerouslySetInnerHTML={{ __html: utils.getContent(objItem.subTitle) }} />
                    </div>

                    <div className="flex">
                        <div className="basis-full md:basis-10/12 mx-auto">
                            <div className="text-h3 text-center">
                                {utils.getContent(objItem?.desc)}
                            </div>
                            <div className="block text-center mt-14">
                                <button className="btn btn-secondary btn-style-2 ">
                                    {utils.getContent(objItem?.btnTitle)}{" "}
                                    <i className="fa-solid fa-arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FreeQuote
