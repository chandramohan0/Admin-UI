import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../SearchBar";

const mockHandleSearchUser = jest.fn();

describe("Check for search bar functionality", () => {
  it("should render search bar with placeholder text", () => {
    render(
      <SearchBar
        placeholderText="Search by name, email or role"
        query="User 1"
        handleSearchUser={mockHandleSearchUser}
      />
    );
    const searchBarElement = screen.getByPlaceholderText(
      /Search by name, email or role/i
    );

    expect(searchBarElement).toBeInTheDocument();
  });

  it("should be able to type in the search bar", () => {
    render(
      <SearchBar
        placeholderText="Search by name, email or role"
        query="User 1"
        handleSearchUser={mockHandleSearchUser}
      />
    );
    const searchBarElement = screen.getByPlaceholderText(
      /Search by name, email or role/i
    );
    fireEvent.change(searchBarElement, { target: { value: "User 1" } });
    expect(searchBarElement.value).toBe("User 1");
  });
});
