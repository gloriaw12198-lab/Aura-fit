
import axios from "axios";
const API_KEY = "79ef43c74169878a691b7553069d043b";

export const getWeather = async (city = "Nairobi") => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          units: "metric",
          appid: API_KEY,
        },
      }
    );

    return {
      temp: res.data.main.temp,
      condition: res.data.weather[0].main,
    };
  } catch (err) {
    console.error("Weather error:", err);
    return null;
  }
};

  


