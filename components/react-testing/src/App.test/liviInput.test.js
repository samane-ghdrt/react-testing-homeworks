import LiveInput from "../5-LiveInput/LiveInput";
import {screen,render,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';

describe("Text component", () => {
  test('test', () => {
    render(<LiveInput />);
    const inputElement = screen.getByPlaceholderText("Enter a text");
    expect(inputElement).toBeInTheDocument();
  });
   test('test', () => {
    render(<LiveInput />);
    const inputElement = screen.getByRole("heading",{level:2});
    expect(inputElement).toBeInTheDocument();
  });
   test('test', () => {
    render(<LiveInput />);
    const inputElement = screen.getByPlaceholderText("Enter a text");
    const headingElement = screen.getByRole("heading",{level:2});
    fireEvent.change(inputElement,{target:{ value: "Hello World"}})
    expect(headingElement).toHaveTextContent("Hello World");
  });
});