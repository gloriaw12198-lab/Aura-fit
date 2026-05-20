import { describe, it, expect } from "vitest";
import { getOutfit } from "../utils/outfit";

describe("Outfit logic", () => {
  it("returns light outfit for hot weather", () => {
    expect(getOutfit(30)).toBe("light");
  });

  it("returns hoodie for cold weather", () => {
    expect(getOutfit(15)).toBe("hoodie");
  });
});