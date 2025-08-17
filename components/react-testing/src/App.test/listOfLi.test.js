import ListOfLi from "../2-ListOfLi/ListOfLi";
import { render, screen } from "@testing-library/react";

describe("Text component", () => {
  test('ListOfLi "Welcome To APS"', () => {
    const usernames = ["john", "sam", "jasem", "tom"];
    render(<ListOfLi usernames={usernames} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(usernames.length);
  });
});
