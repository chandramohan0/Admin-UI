import { render, screen } from "@testing-library/react";
import LoadingPage from "../LoadingPage";

describe("Check for users loading", () => {
  it("should render user loading text", () => {
    render(<LoadingPage message={"Loading Users ..."} />);
    const screenText = screen.getByText(/Loading Users.../i);

    expect(screenText).toBeInTheDocument();
  });
});
