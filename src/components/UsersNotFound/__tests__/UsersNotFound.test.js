import { render, screen } from "@testing-library/react";
import UsersNotFound from "../UsersNotFound";

describe("Test for users not found text", () => {
  it("should render users not found text", () => {
    render(<UsersNotFound />);
    const screenText = screen.getByText(/No Users Found/i);

    expect(screenText).toBeInTheDocument();
  });
});