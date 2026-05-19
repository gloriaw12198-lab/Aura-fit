import { describe, it, expect } from "vitest";
import { getWeather } from "../api/weather";

describe("Weather API", () => {
  it("returns data or null", async () => {
    const res = await getWeather("Nairobi");
    expect(res === null || typeof res === "object").toBe(true);
  });
});