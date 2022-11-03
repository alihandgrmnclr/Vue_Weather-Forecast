import axios from "axios";

// export const apiKey = "8ba8d918b3ff4a298cc397a81fd92bbe";
export const apiKey = "40292a35611f3cc34715fd0dce08e194";

// export const mainHttp = axios.create({
//   baseURL: "https://api.weatherbit.io/v2.0/forecast/daily?city=",
// });
export const mainHttp = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

// export const locationHttp = axios.create({
//   baseURL: "https://api.weatherbit.io/v2.0/forecast",
// });
export const locationHttp = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});


// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}