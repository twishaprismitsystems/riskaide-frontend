import MainLayout from "@/layouts/MainLayout";
import ApiService from "@/services/ApiService";
import { IHomePageInfo } from "@/types/homePage";
import utils from "@/utils/utils";
import { createContext, useEffect, useState } from "react";
import MainContent from "./MainContent";
import PageLoading from "@/common/PageLoading";
export const LandingPageContextApi = createContext({} as IHomePageInfo);

const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [result, setResult] = useState<IHomePageInfo>(
    {} as IHomePageInfo
  );

  const loadData = async () => {
    try {
      const res = await ApiService.getHomePageInfo();
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
    document.body.className = "home";
    loadData();
  }, []);

  if (isLoading) return <PageLoading />;
  return (
    <LandingPageContextApi.Provider value={result}>
      <MainLayout>
        <MainContent />
      </MainLayout>
    </LandingPageContextApi.Provider>
  );
};

export default HomePage;
