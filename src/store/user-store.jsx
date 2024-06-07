import { create } from "zustand";

// Define your store
export const useUserStore = create((set) => ({
  email: "",
  username: "",
  password: "",
  notification_status: 0,
  loginEmail: "",
  loginPassword: "",
  loggedInUserDetails: {},
  setEmail: (email) => set((state) => ({ ...state, email })),
  setUserName: (username) => set((state) => ({ ...state, username })),
  setPassword: (password) => set((state) => ({ ...state, password })),
  setLoginEmail: (loginEmail) => set((state) => ({ ...state, loginEmail })),
  setLoggedInUserDetails: (loggedInUserDetails) =>
    set(() => ({ loggedInUserDetails })),
  setLoginPassword: (loginPassword) =>
    set((state) => ({ ...state, loginPassword })),
  setNotification: (notification_status) =>
    set((state) => ({ ...state, notification_status })),
}));
