import { render, screen } from "@testing-library/react";
import AdminPage from "../AdminPage";

describe("Check for components on render", () => {
  it("should show Loading Users when no users are fetched", () => {
    render(<AdminPage />);
    const loadingUserElement = screen.getByText(/Loading Users.../i);

    expect(loadingUserElement).toBeInTheDocument();
  });
});
