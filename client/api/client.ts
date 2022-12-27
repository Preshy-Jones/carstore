import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const client = () => {
  const instance = axios.create({
    baseURL: "https://carstore-4xsa.vercel.app",
    withCredentials: true,
    // headers: {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    // },
  });

  instance.interceptors.request.use(
    (config: any) => {
      return config;
    },
    (error: any) => {
      console.log(error);

      return Promise.reject(error);
    }
  );

  return instance;
};

export default client;
