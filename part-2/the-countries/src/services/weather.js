import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/forecast";

const apiKey = "eaebd89828e1c9c4d93a81aaecbbe540";

const getData = async (lat, lon) => {
  const request = axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
  const response = await request;
  return response.data;
};

export default {
  getData,
};
