
import axios from "axios";
const ACCESS_KEY = "zIaz061_9dy8vpe40xPeICddX2FWoqrV-72Q2DhWOAA"; 
export const getOutfitImage = async (query) => {
  try {
    const res = await axios.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query,
          per_page: 1,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      }
    );

    return res.data.results[0]?.urls?.regular;
  } catch (err) {
    console.error("Unsplash error:", err);
    return null;
  }
};