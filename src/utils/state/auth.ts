import { computed, signal } from "@preact/signals";
import { storage } from "~utils/storage.ts";

export function useAuth() {
  const user = signal<null | { id: string; email: string }>(null);
  const token = signal<string>("");
  const isAuthenticated = computed(() => token.value !== "");

  const destroy = () => {
    storage.removeItem("auth:session");
    token.value = "";
    user.value = null;
  };

  const save = (value: string) => {
    storage.setItem("auth:session", value);
  };

  const value = storage.getItem("auth:session");
  if (value) {
    try {
      const auth = JSON.parse(value);
      token.value = auth.access_token;
      user.value = auth.user;
    } catch (_) {
      destroy();
    }
  }

  return { user, token, isAuthenticated, save, destroy };
}

export const auth = useAuth();
