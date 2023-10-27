import axios from "axios";
import { BACKEND_PATH } from "../../config";
interface IResponse {
  data: any;
  isError: boolean;
  message: string;
}
class ApiService {
  static getHomePageInfo = async (): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/homePage/`;
    const res = await axios.get(url);
    return res.data;
  };

  static userAuth = async (
    username: string,
    password: string
  ): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/admin/login`;
    const res = await axios.post(url, { data: { username, password } });
    return res.data;
  };

  static checkUser = async (token: string): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/admin/checkuser`;
    const res = await axios.post(url, { data: { token } });
    return res.data;
  };

  static getServicePageInfo = async (): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/servicePage/`;
    const res = await axios.get(url);
    return res.data;
  };

  static getAboutPageInfo = async (): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/aboutPage/`;
    const res = await axios.get(url);
    return res.data;
  };

  static getHeaderInfo = async (): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/common/headerInfo`;
    const res = await axios.get(url);
    return res.data;
  };

  static getClients = async (): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/common/clientInfo`;
    const res = await axios.get(url);
    return res.data;
  };

  static getTestimonialInfo = async (): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/common/testimonial`;
    const res = await axios.get(url);
    return res.data;
  };

  static getFooterInfo = async (): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/common/footerInfo`;
    const res = await axios.get(url);
    return res.data;
  };

  static getCommonPageDataForAdmin = async (
    token: string
  ): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/admin/getcommonpage`;
    const res = await axios.get(url, {
      headers: {
        token: token,
      },
    });
    return res.data;
  };

  static saveCommonDataForAdmin = async (
    data: any,
    id: any,
    token: string
  ): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/admin/commonpage`;
    const res = await axios.post(
      url,
      { data: data, id: id },
      {
        headers: {
          token: token,
        },
      }
    );
    return res.data;
  };

  static getHomePageDataForAdmin = async (
    token: string
  ): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/admin/gethomepage`;
    const res = await axios.get(url, {
      headers: {
        token: token,
      },
    });
    return res.data;
  };

  static saveHomePageDataForAdmin = async (
    data: any,
    id: any,
    token: string
  ): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/admin/homepage`;
    const res = await axios.post(
      url,
      { data: data, id: id },
      {
        headers: {
          token: token,
        },
      }
    );
    return res.data;
  };

  static getAboutPageDataForAdmin = async (
    token: string
  ): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/admin/getaboutpage`;
    const res = await axios.get(url, {
      headers: {
        token: token,
      },
    });
    return res.data;
  };

  static saveAboutPageDataForAdmin = async (
    data: any,
    id: any,
    token: string
  ): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/admin/aboutpage`;
    const res = await axios.post(url, 
      { data: data, id: id },
      {
        headers: {
          token: token,
        },
      }
    );
    return res.data;
  };

  static saveAdminServicePageInfo = async (
    data: any,
    id: any,
    token: string
  ): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/admin/servicepage`;
    const res = await axios.post(url, 
      { data: data, id: id },
      {
        headers: {
          token: token,
        },
      }
    );
    return res.data;
  };

  static getAdminServicePageInfo = async (
    token: string
  ): Promise<IResponse> => {
    const url = `${BACKEND_PATH}/admin/getservicepage`;
    const res = await axios.get(url, {
      headers: {
        token: token,
      },
    });
    return res.data;
  };
}

export default ApiService;
