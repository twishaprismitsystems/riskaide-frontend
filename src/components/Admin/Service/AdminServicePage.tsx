import PageLoading from '@/common/PageLoading';
import ApiService from '@/services/ApiService';
import { adminServiceSchema } from '@/services/yupSchema/schemas';
import { IServicePageInfo } from '@/types/servicePage';
import utils from '@/utils/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import GeneralInsurance from './GeneralInsurance/GeneralInsurance';
import AdminServiceHeader from './Header/AdminServiceHeader';
import HealthInsurance from './HealthInsurance/HealthInsurance';
import LifeInsurance from './LifeInsurance/LifeInsurance';
import MotorInsurance from './MotorInsurance/MotorInsurance';
import TravelInsurance from './TravelInsurance/TravelInsurance';

export default function AdminServicePage() {
    const [serviceData, setServiceData] = useState<IServicePageInfo>({} as IServicePageInfo)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();

    type IFormData = yup.InferType<typeof adminServiceSchema>

    const loadData = async () => {
        try {
            setIsLoading(true)
            const token = localStorage.getItem('riskaide_token');
            if (token) {
                const res = await ApiService.getAdminServicePageInfo(token);
                setServiceData(res.data);
            } else {
                router.push('/admin/login')
            }
        } catch (ex: any) {
            utils.showErrorMessage(ex.message)
        } finally {
            setIsLoading(false)
        }
    }

    const objForm = useForm({
        defaultValues: {
            title: "",
            desc: "",
            header: {
                title: "",
                desc: ""
            },
            generalInsurance: {
                title: "",
                data: [
                    {
                        title: "",
                        desc: "",
                        image: "",
                    },
                ]
            },
            lifeInsurance: {
                title: "",
                data: [
                    {
                        title: "",
                        desc: "",
                        image: "",
                    },
                ]
            },
            travelInsurance: {
                title: "",
                data: [
                    {
                        title: "",
                        desc: "",
                        image: "",
                    },
                ]
            },
            healthInsurance: {
                title: "",
                data: [
                    {
                        title: "",
                        desc: "",
                        image: "",
                    },
                ]
            },
            motorInsurance: {
                title: "",
                data: [
                    {
                        title: "",
                        desc: "",
                        image: "",
                    },
                ]
            },
        },
        resolver: yupResolver(adminServiceSchema)
    });

    const onSave = async (data: IFormData) => {
        try {
            setIsLoading(true);
            let id = serviceData?._id ? serviceData?._id : null;
            const token = localStorage.getItem('riskaide_token');
            if (token) {
                const res = await ApiService.saveAdminServicePageInfo(data, id, token)
                if (!res.isError) {
                    utils.showSuccessMessage('Data has been saved.');
                    setIsLoading(false);
                }
            }
            else {
                setIsLoading(false);
                router.push('/admin/login')
            }
        } catch (ex: any) {
            setIsLoading(false);
            utils.showErrorMessage(ex.message)
        }
    }


    useEffect(() => {
        loadData();
    }, [])


    useEffect(() => {
        if (serviceData && Object.keys(serviceData).length > 0) {
            objForm.reset({
                title: serviceData.title,
                desc: serviceData.desc,
                header: serviceData.header || {
                    title: "",
                    desc: ""
                },
                generalInsurance: serviceData.generalInsurance || {
                    title: "",
                    data: [
                        {
                            title: "",
                            desc: "",
                            image: "",
                        },
                    ]
                },
                lifeInsurance: serviceData.lifeInsurance || {
                    title: "",
                    data: [
                        {
                            title: "",
                            desc: "",
                            image: "",
                        },
                    ]
                },
                travelInsurance: serviceData.travelInsurance || {
                    title: "",
                    data: [
                        {
                            title: "",
                            desc: "",
                            image: "",
                        },
                    ]
                },
                healthInsurance: serviceData.healthInsurance || {
                    title: "",
                    data: [
                        {
                            title: "",
                            desc: "",
                            image: "",
                        },
                    ]
                },
                motorInsurance: serviceData.motorInsurance || {
                    title: "",
                    data: [
                        {
                            title: "",
                            desc: "",
                            image: "",
                        },
                    ]
                },
            })
        }
    }, [serviceData])


    console.log(objForm.formState.errors)
    if (isLoading) return <PageLoading />
    return (
        <FormProvider {...objForm}>
            <form onSubmit={objForm.handleSubmit(onSave)}>
                <AdminServiceHeader />
                <LifeInsurance />
                <HealthInsurance />
                <TravelInsurance />
                <MotorInsurance />
                <GeneralInsurance />
                <button
                    type="submit"
                    className="stickyBtn my-16 bg-primary text-h5 text-white font-bold p-4 rounded-md hover:bg-primaryHover"
                >
                    {serviceData?._id ? "Update Information" : "Save Information"}
                </button>
            </form>
        </FormProvider>
    )
}
