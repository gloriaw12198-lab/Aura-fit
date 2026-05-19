import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Navbar from "../components/Navbar";

vi.mock("../context/AuthContext", () => ({
  useAuth: () => ({
    user: {
      displayName: "Gloria",
      photoURL: "https://example.com/photo.jpg",
    },
    logout: vi.fn(),
  }),
}));

describe("Navbar", () => {
  it("renders AuraFit logo", () => {
    render(<Navbar />);
    expect(screen.getByText(/AuraFit/i)).toBeInTheDocument();
  });
});