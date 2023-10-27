import PageLoading from "@/common/PageLoading";
import MainLayout from "@/layouts/MainLayout";
import ApiService from "@/services/ApiService";
import { IAboutData } from "@/types/aboutPage";
import utils from "@/utils/utils";
import { createContext, useEffect, useState } from "react";
import MainContent from "./MainContent/MainContent";
export const AboutPageContextApi = createContext({} as IAboutData);

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [result, setResult] = useState<IAboutData>({} as IAboutData);

  const loadData = async () => {
    try {
      const res = await ApiService.getAboutPageInfo();
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
    document.body.className = "about";
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) return <PageLoading />;
  return (
    <AboutPageContextApi.Provider value={result}>
      <MainLayout>
        <MainContent />
      </MainLayout>
    </AboutPageContextApi.Provider>
  );
};

export default AboutPage;
