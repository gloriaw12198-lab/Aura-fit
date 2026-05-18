const ACCESS_KEY = "zIaz061_9dy8vpe40xPeICddX2FWoqrV-72Q2DhWOAA";

export const getFitnessImages = async () => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=fitness&client_id=${ACCESS_KEY}`
    );

    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
};