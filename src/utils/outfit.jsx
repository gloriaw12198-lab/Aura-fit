export const getOutfit = (temp) => {
  if (temp < 15) {
    return { outfit: "Winter Jacket + Boots", style: "Warm layered look ❄️" };
  }

  if (temp < 25) {
    return { outfit: "Hoodie + Jeans", style: "Casual streetwear 👟" };
  }

  return { outfit: "T-shirt + Shorts", style: "Light summer fit ☀️" };
};