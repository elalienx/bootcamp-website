// NPM packages
import { render, screen } from "@testing-library/react";

// Project files
import App from "./App";
import { ModalProvider } from "state/ModalProvider";

test("renders training program subtitle", () => {
  // Arrange
  window.scrollTo = jest.fn();

  render(<div id="portal"></div>);
  render(
    <ModalProvider initialState={null}>
      <App />
    </ModalProvider>
  );

  // Assert
  const subtitle = screen.queryByText(/training program/i);

  // Act
  expect(subtitle).toBeInTheDocument();
});
