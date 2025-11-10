import { apiClient } from "./apiClient.jsx";

export const authService = {
  login: (payload) =>
    apiClient("login/", {
      method: "POST",
      body: payload,
    }),

  register: (payload) =>
    apiClient("register/", {
      method: "POST",
      body: payload,
    }),
};
