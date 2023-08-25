import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import ImageCard, { ImageCardProps } from "../ImageCard";

const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("ImageCard Component", () => {
  const defaultProps: ImageCardProps = {
    imageUrl:
      "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg",
    id: 1,
    date: "2023-07-19",
    setDisliked: jest.fn(),
    seeLike: false,
    nameCamera: "Camera test",
  };

  const renderComponent = (
    props: Partial<ImageCardProps> = {}
  ): RenderResult => {
    return render(<ImageCard {...defaultProps} {...props} />);
  };

  it("renders correctly", () => {
    const { getByText, getByAltText } = renderComponent();

    expect(getByAltText("")).toBeDefined();
    expect(getByText("2023-07-19")).toBeDefined();
    expect(getByText("Camera test")).toBeDefined();
    expect(getByText("🤍")).toBeDefined();
  });

  it("expands when clicked", () => {
    const { getByAltText, getByText } = renderComponent();

    fireEvent.click(getByAltText(""));

    expect(getByText("¡Click to enlarge!")).toBeDefined();
  });

  it("Changes the 'Like' status when the 'Like' button is clicked.", () => {
    const setDislikedMock = jest.fn();
    const { getByText } = renderComponent({
      seeLike: false,
      setDisliked: setDislikedMock,
    });
    fireEvent.click(getByText("🤍"));

    expect(getByText("❤️")).toBeDefined();
  });
});
