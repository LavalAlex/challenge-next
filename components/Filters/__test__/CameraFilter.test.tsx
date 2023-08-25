import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import CameraFilter, { Props } from "../CameraFilter";

jest.mock("../../../hook", () => ({
  useShow: (): { state: boolean; hide: () => void; toggle: () => void } => ({
    state: true,
    hide: jest.fn(),
    toggle: jest.fn(),
  }),
}));

const onQueryMock = jest.fn();
describe("CameraFilter Component", () => {
  const renderComponent = (props: Props): RenderResult => {
    return render(<CameraFilter {...props} onQuery={onQueryMock} />);
  };

  it("correctly renders the cameras of the curiosity option.", () => {
    const { getByText } = renderComponent({ rover: "curiosity" });

    expect(getByText("RHAZ")).toBeDefined();
    expect(getByText("MAST")).toBeDefined();
    expect(getByText("CHEMCAM")).toBeDefined();
    expect(getByText("MARDI")).toBeDefined();
    expect(getByText("NAVCAM")).toBeDefined();
    expect(getByText("MAHLI")).toBeDefined();

    fireEvent.click(getByText("RHAZ"));
    fireEvent.click(getByText("MAST"));
    fireEvent.click(getByText("CHEMCAM"));
    fireEvent.click(getByText("MARDI"));
    fireEvent.click(getByText("NAVCAM"));
    fireEvent.click(getByText("MAHLI"));

    expect(onQueryMock).toHaveBeenCalledWith("camera", "RHAZ");
    expect(onQueryMock).toHaveBeenCalledWith("camera", "MAST");
    expect(onQueryMock).toHaveBeenCalledWith("camera", "CHEMCAM");
    expect(onQueryMock).toHaveBeenCalledWith("camera", "MARDI");
    expect(onQueryMock).toHaveBeenCalledWith("camera", "NAVCAM");
    expect(onQueryMock).toHaveBeenCalledWith("camera", "MAHLI");
  });

  it("correctly renders the cameras of the not curiosity option", () => {
    const { getByText } = renderComponent({ rover: "both" });

    expect(getByText("FHAZ")).toBeDefined();
    expect(getByText("RHAZ")).toBeDefined();
    expect(getByText("NAVCAM")).toBeDefined();
    expect(getByText("PANCAM")).toBeDefined();
    expect(getByText("MINITES")).toBeDefined();
  });
});
