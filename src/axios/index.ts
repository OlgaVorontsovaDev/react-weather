import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

api.interceptors.request.use((config) => {
  if (config.url) {
    config.url = `${config.url}&lang=ru&units=metric&appid=${
      import.meta.env.VITE_API_KEY
    }`;
  }
  return config;
});

export default api;
