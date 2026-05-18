import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWeather } from "../api/weather";
import { getFitnessImages } from "../api/unsplash";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [weather, setWeather] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  useEffect(() => {
    getWeather("Nairobi").then(setWeather);
    getFitnessImages().then(setImages);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">🏋️ AuraFit</h1>

        <div className="flex items-center gap-3">
          <img
            src={user?.photoURL}
            className="w-10 h-10 rounded-full"
          />
          <span>{user?.displayName}</span>

          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {/* ACTIVITY */}
        <div className="bg-gray-800 p-5 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">🔥 Activity</h2>
          <p>Steps: 7,450</p>
          <p>Calories: 520 kcal</p>
          <p>Workout: 35 min</p>
        </div>

        {/* WEATHER */}
        <div className="bg-gray-800 p-5 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">🌤 Weather</h2>

          {weather ? (
            <>
              <p>City: {weather.name}</p>
              <p>Temp: {weather.main.temp}°C</p>
              <p>Condition: {weather.weather[0].main}</p>
            </>
          ) : (
            <p>Loading weather...</p>
          )}
        </div>

        {/* MOTIVATION */}
        <div className="bg-gray-800 p-5 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">💪 Motivation</h2>
          <p>"Discipline beats motivation."</p>
        </div>

        {/* UNSPLASH */}
        <div className="bg-gray-800 p-5 rounded-xl col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl font-semibold mb-3">📸 Fitness Gallery</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {images.slice(0, 8).map((img) => (
              <img
                key={img.id}
                src={img.urls.small}
                className="rounded-lg h-32 w-full object-cover"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
