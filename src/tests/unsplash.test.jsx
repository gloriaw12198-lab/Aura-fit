import { describe, it, expect } from "vitest";
import { getFitnessImages } from "../api/unsplash";

describe("Unsplash API", () => {
  it("returns array", async () => {
    const res = await getFitnessImages();
    expect(Array.isArray(res)).toBe(true);
  });
});