import { create } from "zustand";

// Definir o tipo da store
type AuthStore = {
  token: string;
  setToken: (newToken: string) => void;
  clearToken: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  token: "",
  setToken: (newToken: string) => set({ token: newToken }),
  clearToken: () => set({ token: "" }),
}));

if (typeof window !== "undefined") {
  const token = localStorage.getItem("authToken");
  if (token) {
    useAuthStore.getState().setToken(token);
  }
}
