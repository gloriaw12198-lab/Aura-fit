import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getUserOutfits, deleteOutfit } from "../services/outfits";

export default function Saved() {
  const { user } = useAuth();
  const [outfits, setOutfits] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOutfits = async () => {
    if (!user) return;

    setLoading(true);
    const data = await getUserOutfits(user.uid);
    setOutfits(data);
    setLoading(false);
  };

  useEffect(() => {
    loadOutfits();
  }, [user]);

  const handleDelete = async (id) => {
    await deleteOutfit(id);
    loadOutfits();
  };

  if (loading) {
    return (
      <div className="p-6 text-white">
        Loading saved outfits...
      </div>
    );
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">
        Saved Outfits 💾
      </h1>

      {outfits.length === 0 ? (
        <p className="text-gray-400">
          No outfits saved yet. Go generate some fits 👕
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {outfits.map((o) => (
            <div
              key={o.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              {/* Image */}
              <img
                src={o.image}
                alt="outfit"
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h2 className="text-xl font-bold">
                  {o.title}
                </h2>

                <p className="text-sm text-gray-300">
                  🌡 {o.temperature}°C
                </p>

                {/* Items */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {o.items?.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700 px-2 py-1 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(o.id)}
                  className="mt-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg w-full"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
 