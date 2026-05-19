import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { saveOutfit } from "../services/outfits";
import { generateSmartOutfit } from "../api/outfitEngine";

export default function Dashboard() {
  const { user, logout } = useAuth();

  const [loading, setLoading] = useState(false);
  const [outfit, setOutfit] = useState(null);

  // 👕 Generate + Save + Show outfit
  const handleSave = async () => {
    if (!user) return;

    setLoading(true);

    try {
      // 1. Generate outfit from weather + unsplash
      const generated = await generateSmartOutfit("Nairobi");

      // 2. Show immediately on UI
      setOutfit(generated);

      // 3. Save to Firestore
      await saveOutfit(generated, user.uid);

      alert("Outfit generated & saved 💾");
    } catch (err) {
      console.error(err);
      alert("Failed to generate outfit");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 text-white">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome, {user?.displayName || "User"} 👋
          </h1>
          <p className="text-gray-400">
            Smart Outfit Generator Dashboard
          </p>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* GENERATOR CARD */}
      <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          Generate Outfit 🎯
        </h2>

        <p className="text-gray-400 mb-6">
          Click below to generate a smart outfit using Weather + AI logic
        </p>

        <button
          onClick={handleSave}
          disabled={loading}
          className={`px-6 py-3 rounded-xl font-bold transition ${
            loading
              ? "bg-gray-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Generating..." : "Generate & Save Outfit"}
        </button>
      </div>

      {/* 👕 GENERATED OUTFIT DISPLAY */}
      {outfit && (
        <div className="mt-8 bg-gray-900 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-2">
            {outfit.title}
          </h2>

          <p className="text-gray-400 mb-4">
            🌡 {outfit.temperature}°C
          </p>

          {/* IMAGE */}
          <img
            src={outfit.image}
            alt="outfit"
            className="w-full h-64 object-cover rounded-xl"
          />

          {/* ITEMS */}
          <div className="mt-4 flex flex-wrap gap-2">
            {outfit.items?.map((item, i) => (
              <span
                key={i}
                className="bg-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* INFO SECTION */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="bg-gray-900 p-4 rounded-xl">
          <h3 className="font-bold">🌤 Weather-Based</h3>
          <p className="text-gray-400 text-sm">
            Uses real-time weather data
          </p>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl">
          <h3 className="font-bold">🖼 Unsplash Images</h3>
          <p className="text-gray-400 text-sm">
            Real fashion outfit visuals
          </p>
        </div>

        <div className="bg-gray-900 p-4 rounded-xl">
          <h3 className="font-bold">💾 Firebase Saved</h3>
          <p className="text-gray-400 text-sm">
            Stored per user securely
          </p>
        </div>
      </div>
    </div>
  );
}
      
     

  