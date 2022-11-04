import axios from "axios";

export const apiKey = "40292a35611f3cc34715fd0dce08e194";

export const mainHttp = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const locationHttp = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

