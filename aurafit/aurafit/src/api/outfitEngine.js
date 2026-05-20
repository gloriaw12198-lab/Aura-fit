import { getWeather } from "./weather";
import { getOutfitImage } from "./unsplash";

export const generateSmartOutfit = async (city = "Nairobi") => {
  const weather = await getWeather(city);

  if (!weather) return null;

  let outfit = {
    title: "",
    image: "",
    temperature: weather.temp,
    items: [],
  };

  if (weather.temp <= 18) {
    outfit.title = "Cold Weather Fit";
    outfit.items = ["hoodie", "jacket", "boots"];
    outfit.image = await getOutfitImage("winter fashion jacket outfit");
  } else if (weather.temp <= 26) {
    outfit.title = "Mild Weather Fit";
    outfit.items = ["shirt", "jeans", "sneakers"];
    outfit.image = await getOutfitImage("casual streetwear outfit");
  } else {
    outfit.title = "Hot Weather Fit";
    outfit.items = ["shorts", "t-shirt", "slides"];
    outfit.image = await getOutfitImage("summer fashion outfit street style");
  }

  return outfit;
};