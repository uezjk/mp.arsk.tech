export function useStorage() {
  const removeItem = (name: string) => {
    if (typeof localStorage === "undefined") return;
    localStorage.removeItem(name);
  };
  const setItem = (name: string, value: string) => {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(name, value);
  };
  const getItem = (name: string) => {
    if (typeof localStorage === "undefined") return null;
    return localStorage.getItem(name);
  };
  return { removeItem, setItem, getItem };
}

export const storage = useStorage();
