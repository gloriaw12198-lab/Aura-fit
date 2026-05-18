import { useEffect, useState } from "react";
import { getWeather } from "../api/weather";
import { getFashionImage } from "../api/unsplash";

function Home() {
  const [weather, setWeather] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => { 
    fetchData();
  }, []);

  const fetchData = async () => {
    const weatherData = await getWeather("Nairobi");
    const imageData = await getFashionImage();

    setWeather(weatherData);
    setImage(imageData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">
        AuraFit
      </h1>

      {weather && (
        <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md">
          <img
            src={image}
            alt="fashion"
            className="rounded-xl mb-4"
          />

          <h2 className="text-2xl font-bold">
            {weather.name}
          </h2>

          <p className="mb-2">
            {weather.main.temp}°C
          </p>

          <p>
            Perfect weather for a stylish fit ✨
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;