import { render, screen } from "@testing-library/react";
import DeleteButton from "../DeleteButton";

const MockHandleDeleteUsers = jest.fn();

describe("Delete button should be present", () => {
  it("should show delete button", () => {
    render(
      <DeleteButton
        deleteText="Delete Selected"
        handleDeleteUsers={MockHandleDeleteUsers}
      />
    );
    const deleteText = screen.getByText(/Delete Selected/i);

    expect(deleteText).toBeInTheDocument();
  });
});
