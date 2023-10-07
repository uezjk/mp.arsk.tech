export const useRequest = ({ baseUrl = "" } = {}) => {
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

  const json = async (url: string, body: unknown, options: RequestInit = {}) => {
    options.headers = { ...options.headers, "Content-Type": "application/json" };
    return await post(url, { ...options, body: JSON.stringify(body) });
  };

  return { get, post, put, destroy, json, http };
};

const request = useRequest();

export default request;
