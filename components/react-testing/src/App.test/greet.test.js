import Greet from "../3-Greet/Greet";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("Text component", () => {
  test("test", () => {
    render(<Greet />);
    const divElement = screen.getByText("hello undefined");
    expect(divElement).toBeInTheDocument();
  });
  test("renders correct text when name prop is passed", () => {
    render(<Greet name="John" />);
    const divElement = screen.getByText("hello John");
    expect(divElement).toBeInTheDocument();
  });
});
