import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/forecast";

const apiKey = import.meta.env.VITE_API_KEY;

const getData = async (lat, lon) => {
  const request = axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
  const response = await request;
  return response.data;
};

export default {
  getData,
};
