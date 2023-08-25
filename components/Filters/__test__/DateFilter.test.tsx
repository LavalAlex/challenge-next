import React from "react";
import { render, RenderResult } from "@testing-library/react";
import RoverFilter, { Props } from "../DateFilter";

jest.mock("../../../hook", () => ({
  useShow: (): { state: boolean; hide: () => void; toggle: () => void } => ({
    state: true,
    hide: jest.fn(),
    toggle: jest.fn(),
  }),
}));

const onQueryMock = jest.fn();

describe("RoverFilter Component", () => {
  const renderComponent = (props: Props): RenderResult => {
    return render(<RoverFilter {...props} onQuery={onQueryMock} />);
  };

  it("renders correctly", () => {
    const { getByText } = renderComponent({});

    expect(getByText("2023-08-25")).toBeDefined();
  });

});
