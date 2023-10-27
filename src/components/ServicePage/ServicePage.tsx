import PageLoading from "@/common/PageLoading";
import MainLayout from "@/layouts/MainLayout";
import ApiService from "@/services/ApiService";
import { IServicePageInfo } from "@/types/servicePage";
import utils from "@/utils/utils";
import { createContext, useEffect, useState } from "react";
import MainContent from "./MainContent/MainContent";
export const ServicePageContextApi = createContext({} as IServicePageInfo);

const ServicePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [result, setResult] = useState<any>();
  useEffect(() => {
    document.body.className = "services";
  }, []);

  const loadData = async () => {
    try {
      const res = await ApiService.getServicePageInfo();
      if (!res.isError) {
        setResult(res.data[0]);
        return null;
      }
      throw new Error(res.message);
    } catch (ex: any) {
      utils.showErrorMessage(ex.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
    {
      isLoading ?
        <PageLoading />
      : ''
    }
    <ServicePageContextApi.Provider value={result}>
      <MainLayout>
        <MainContent />
      </MainLayout>
    </ServicePageContextApi.Provider>
    </>
  );
};

export default ServicePage;
