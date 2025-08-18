import TodoContainer from "../6-TodoApp/TodoContainer";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("todoapp", () => {
  test("todoapp test", () => {
    render(<TodoContainer />);
    const input = screen.getByPlaceholderText("write a todo");
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "Learn React" } });
    fireEvent.click(button);
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });
  test("todoapp test", () => {
    render(<TodoContainer />);
    const input = screen.getByPlaceholderText("write a todo");
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "Learn React" } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: "Learn React2" } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: "Learn React3" } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: "Learn React4" } });
    fireEvent.click(button);
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });
});
