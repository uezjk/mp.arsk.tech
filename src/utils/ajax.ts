import { auth } from "~utils/state/auth.ts";

export function useAjax({ baseUrl = "" } = {}) {
  const http = async (url: string, options: RequestInit = {}) => {
    const token = auth.token;
    if (token.value) {
      options.headers = { ...options.headers, Authorization: `Bearer ${token.value}` };
    }
    const resp = await fetch(`${baseUrl}${url}`, options);
    const json = await resp.json();
    return [resp.ok, json];
  };

  const get = async (url: string, options: RequestInit = {}) => {
    return await http(url, { ...options, method: "GET" });
  };

  const post = async (url: string, options: RequestInit = {}) => {
    return await http(url, { ...options, method: "POST" });
  };

  const put = async (url: string, options: RequestInit = {}) => {
    return await http(url, { ...options, method: "PUT" });
  };

  const destroy = async (url: string, options: RequestInit = {}) => {
    return await http(url, { ...options, method: "DELETE" });
  };

  const json = async (url: string, body: unknown, options: RequestInit = {}) => {
    options.headers = { ...options.headers, "Content-Type": "application/json" };
    return await post(url, { ...options, body: JSON.stringify(body) });
  };

  return { get, post, put, destroy, http, json };
}

const ajax = useAjax();

export default ajax;
