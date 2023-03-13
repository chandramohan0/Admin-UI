import { render, screen } from "@testing-library/react";
import Pagination from "../Pagination";

const mockPaginate = jest.fn();
const mockPrevPage = jest.fn();
const mockNextPage = jest.fn();

describe("Check for pagination elements", () => {
  it("should render ul elements for the users", () => {
    render(
      <Pagination
        usersPerPage={5}
        totalUsers={10}
        paginate={mockPaginate}
        prevPage={mockPrevPage}
        nextPage={mockNextPage}
      />
    );
    const navigationElement = screen.getByRole("navigation");
    const ulElement = screen.getByRole("list");

    expect(navigationElement).toBeInTheDocument();
    expect(ulElement).toBeInTheDocument();
  });
});
