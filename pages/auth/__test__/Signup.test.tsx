import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SignupPage from "../signup";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(), 
    pathname: "", 
  }),
}));

export const Props = { data: { email: "test@gamil.com" } };

describe("SigupPage Component", () => {
  it("renders correctly", () => {
    const { getByText, getByLabelText, getAllByText } = render(
      <SignupPage {...Props} />
    );

    expect(getAllByText("Register")).toBeDefined();
    expect(getByLabelText("Email")).toBeDefined();
    expect(getByLabelText("Password")).toBeDefined();
    expect(getByText("Login Account")).toBeDefined();
  });

  it("submits the form with valid input", async () => {
    const { getByLabelText, getAllByText } = render(<SignupPage {...Props} />);

    fireEvent.change(getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.click(getAllByText("Register")[1]);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/");
    });
  });
});
