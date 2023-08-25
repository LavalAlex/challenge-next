import React from "react";
import { render, RenderResult } from "@testing-library/react";
import UserHome from "../UserHome";

describe("Home Component", () => {
  const renderComponent = (): RenderResult => {
    return render(<UserHome />);
  };

  it("Loads liked images correctly", () => {
    localStorage.setItem("liked_1", "true");
    localStorage.setItem("liked_2", "true");

    const { queryByTestId } = renderComponent();

    const likedImage1 = queryByTestId("liked-image-1");
    const likedImage2 = queryByTestId("liked-image-2");

    expect(likedImage1).toBeDefined();
    expect(likedImage2).toBeDefined();
  });
});
