import { render, screen } from "@testing-library/react";
import EditableRow from "../EditableRow";

// Importing mock users
import Users from "../../../mock/users.json";

const mockHandleEditUserChange = jest.fn();

describe("Check for edit row elements", () => {
  it("should render table elements", () => {
    const userOne = Users[0];
    render(
      <EditableRow
        user={userOne}
        editUserData={userOne}
        handleEditUserChange={mockHandleEditUserChange}
        selectedRowIds={[]}
      />
    );
  });
});
