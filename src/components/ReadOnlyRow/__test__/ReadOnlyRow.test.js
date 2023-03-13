import { render, screen } from "@testing-library/react";
import ReadOnlyRow from "../ReadOnlyRow";

import Users from "../../../mock/users.json";

describe("Check for readOnly row elements", () => {
  it("should render table elements", () => {
    const userOne = Users[0];
    render(<ReadOnlyRow user={userOne} selectedRowIds={[]} />);
  });
});