import LiveInput from "../5-LiveInput/LiveInput";
import {screen,render} from '@testing-library/react'
import '@testing-library/jest-dom';

describe("Text component", () => {
  test('test', () => {
    render(<LiveInput />);
    const inputElement = screen.getByPlaceholderText("Enter a text");
    expect(inputElement).toBeInTheDocument();
  });
});