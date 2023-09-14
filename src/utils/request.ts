import { STRAPI_API_URL } from "./costants.ts";

export const useRequest = ({ baseUrl = "" } = {}) => {
  baseUrl = baseUrl || STRAPI_API_URL;

  const http = async (url: string, options?: RequestInit) => {
    const response = await fetch(`${baseUrl}${url}`, options);
    const json = await response.json();
    return [response.ok, json];
  };

  const get = async (url: string, options?: RequestInit) => {
    return await http(url, { ...options, method: "GET" });
  };

  const post = async (url: string, options?: RequestInit) => {
    return await http(url, { ...options, method: "POST" });
  };

  const put = async (url: string, options?: RequestInit) => {
    return await http(url, { ...options, method: "PUT" });
  };

  const destroy = async (url: string, options?: RequestInit) => {
    return await http(url, { ...options, method: "DELETE" });
  };

  return { get, post, put, destroy, http };
};

const request = useRequest();

export default request;
