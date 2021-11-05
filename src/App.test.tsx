// NPM packages
import React from "react";
import { render, screen } from "@testing-library/react";

// Project files
import App from "./App";

test("renders training program subtitle", () => {
  // Arrange
  window.scrollTo = jest.fn();

  render(<App />);

  // Assert
  const subtitle = screen.queryByText(/training program/i);

  // Act
  expect(subtitle).toBeInTheDocument();
});
