import axios from "axios";

export const mainHttp = axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/forecast/daily?city=",
});


