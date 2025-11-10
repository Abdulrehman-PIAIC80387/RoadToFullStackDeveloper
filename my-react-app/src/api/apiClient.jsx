let authToken = null; // in-memory token only

export const setToken = (token) => {
  authToken = token;
};

export const apiClient = async (endpoint, options = {}) => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL; 

  const headers = {
    "Content-Type": "application/json",
    ...(authToken && { Authorization: `Token ${authToken}` }),
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: options.method ?? "GET",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.detail ?? "Request failed");
  }

  return response.json();
};
