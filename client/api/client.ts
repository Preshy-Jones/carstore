import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const client = () => {
  const instance = axios.create({
    baseURL: "https://carstore-4xsa.vercel.app",
    withCredentials: false,
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