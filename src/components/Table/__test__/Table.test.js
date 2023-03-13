import { render, screen } from "@testing-library/react";
import Table from "../Table";

const mockSetUserToBeDeleted = jest.fn();

// Importing mock users
import Users from "../../../mock/users.json";

describe("Check for table elements", () => {
  it("should render table elements", () => {
    render(<Table users={Users} setUserToBeDeleted={mockSetUserToBeDeleted} />);
    const table = screen.getByRole("table");
    const tr = screen.getAllByRole("row");
    expect(table).toBeInTheDocument();
    expect(tr).toHaveLength(4);
  });
});
