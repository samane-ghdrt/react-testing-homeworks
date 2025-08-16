// import Text from "./Text";
// import { render, screen } from "@testing-library/react";
// describe("test", () => {
//   test("should first", () => {
//     render(<Text {headingText="Welcome To APS" }/>);
//     expect(screen.getByText(/Welcome To APS/i)).toBeInTheDocument();
//   });
//   test("should first", () => {
//     const heading = "Welcome To APS";
//     render(<Text headingText={heading} />);
//     expect(screen.getByRole(heading, { level: 2 })).toHaveTextContent(heading);
//   });
// });

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "./Text";

describe("Text component", () => {
  test('renders "Welcome To APS"', () => {
    render(<Text headingText="Sample Heading" />);

    expect(screen.getByText("Welcome To APS")).toBeInTheDocument();
  });

  test("renders heading with provided headingText prop", () => {
    const headingValue = "Custom Heading";
    render(<Text headingText={headingValue} />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      headingValue
    );
  });
});
