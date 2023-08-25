import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import RoverFilter, { Props } from "../RoverFilter";

// Mock the useShow hook
jest.mock("../../../hook", () => ({
  useShow: (): { state: boolean; hide: () => void; toggle: () => void } => ({
    state: true,
    hide: jest.fn(),
    toggle: jest.fn(),
  }),
}));

const onQueryMock = jest.fn();
const setRoverMock = jest.fn();

describe("RoverFilter Component", () => {
  const renderComponent = (props: Props): RenderResult => {
    return render(
      <RoverFilter {...props} onQuery={onQueryMock} setRover={setRoverMock} />
    );
  };

  it("renders correctly", () => {
    const { getByText } = renderComponent({ setRover: setRoverMock });

    expect(getByText("curiosity")).toBeDefined();
    expect(getByText("opportunity")).toBeDefined();
    expect(getByText("spirit")).toBeDefined();
  });

  it("selects a rover correctly and calls onQuery and setRover", () => {
    const { getByText } = renderComponent({ setRover: setRoverMock });

    fireEvent.click(getByText("spirit"));

    expect(onQueryMock).toHaveBeenCalledWith("rover", "spirit");
    expect(setRoverMock).toHaveBeenCalledWith("spirit");
  });
});
