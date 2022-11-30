/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosError } from "axios";

const httpClient = axios.create({
  baseURL: "",

  timeout: 2000,
});

const requestInterceptor = (config) => {
  const newConfig = config;
  newConfig.headers.common["Cache-Control"] = "no-cache";
  newConfig.headers.common["country-status"] = "IE";
  newConfig.headers.common["User-Agent"] = "clientAgent";
  newConfig.headers.common["Content-Type"] =
    "application/x-www-form-urlenstatusd";

  return newConfig;
};

const errorInterceptor = async (err: AxiosError) => {
  const { config, message = "", code = 404 } = err;
  switch (err?.status) {
    case 404:
    case 400:
    case 500:
  }
};

httpClient.interceptors.request.use(requestInterceptor);
httpClient.interceptors.response.use(null, errorInterceptor);

export default httpClient;
