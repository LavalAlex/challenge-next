import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import LikeFilter, { Props } from "../LikeFilter";

jest.mock("../../../hook", () => ({
  useShow: (): { state: boolean; hide: () => void; toggle: () => void } => ({
    state: true,
    hide: jest.fn(),
    toggle: jest.fn(),
  }),
}));

const setSeeLikeMock = jest.fn();

describe("LikeFilter Component", () => {
  const renderComponent = (props: Props): RenderResult => {
    return render(<LikeFilter {...props} />);
  };

  it("renders correctly", () => {
    const { getByText } = renderComponent({ setSeeLike: setSeeLikeMock });

    expect(getByText("YES")).toBeDefined();
    expect(getByText("NO")).toBeDefined();
  });

  it("selects a like option correctly and calls setSeeLike", () => {
    const { getByText } = renderComponent({ setSeeLike: setSeeLikeMock });
    fireEvent.click(getByText("YES"));
    expect(setSeeLikeMock).toHaveBeenCalledWith(true);

    fireEvent.click(getByText("NO"));
    expect(setSeeLikeMock).toHaveBeenCalledWith(false);
  });

});
