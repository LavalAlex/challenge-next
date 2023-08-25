import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import ExpandedImage, { ExpandedImageProps } from "../ExpandedImage";

describe("ExpandedImage Component", () => {
  const defaultProps: ExpandedImageProps = {
    imageUrl: "https://example.com/image.jpg",
    onClose: jest.fn(),
  };

  const renderComponent = (
    props: Partial<ExpandedImageProps> = {}
  ): RenderResult => {
    return render(<ExpandedImage {...defaultProps} {...props} />);
  };

  it("renders correctly", () => {
    const { getByAltText, getByText } = renderComponent();

    expect(getByAltText("Instagram")).toBeDefined();
    expect(getByText("✕")).toBeDefined();
  });

  it("Calls onClose when close button is clicked", () => {
    const onCloseMock = jest.fn();
    const { getByText } = renderComponent({
      onClose: onCloseMock,
    });

    fireEvent.click(getByText("✕"));
    expect(onCloseMock).toHaveBeenCalled();
  });
});
