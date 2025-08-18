import { screen, render } from "@testing-library/react";
import UserTable from "../7-UserTable/UserTable";
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();
describe("test userTable", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("should first", async () => {
    const mockUsers = [
      { id: 1, name: "John Doe", email: "john@example.com", phone: "111-111" },
      { id: 2, name: "Jane Doe", email: "jane@example.com", phone: "222-222" },
    ];
    fetch.mockResponseOnce(JSON.stringify(mockUsers));
    render(<UserTable />);
    expect(await screen.findAllByTestId("user-row")).toHaveLength(2);
  });
});
