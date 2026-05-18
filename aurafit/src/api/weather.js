import axios from "axios";

const API_KEY = "79ef43c74169878a691b7553069d043b";

export const getWeather = async (city) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};