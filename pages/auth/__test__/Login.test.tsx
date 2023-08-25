import { render, fireEvent, waitFor } from "@testing-library/react";
import LoginPage from "../login";
import React from "react";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: "",
  }),
}));

describe("LoginPage Component", () => {
  it("renders correctly", () => {
    const { getByText, getByLabelText, getAllByText } = render(<LoginPage />);

    expect(getAllByText("Login")).toBeDefined();
    expect(getByLabelText("Email")).toBeDefined();
    expect(getByLabelText("Password")).toBeDefined();
    expect(getByText("Create Account")).toBeDefined();
  });

  it("submits the form with valid input", async () => {
    const { getByLabelText, getByText, getAllByText } = render(<LoginPage />);

    fireEvent.change(getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.click(getAllByText("Login")[1]);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/");
    });
  });
});
