import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const client = () => {
  const instance = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
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
