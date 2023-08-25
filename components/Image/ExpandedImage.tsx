import React from "react";
import styled from "styled-components";

interface ExpandedImageProps {
  imageUrl: string;
  onClose: () => void;
}

function ExpandedImage({ imageUrl, onClose }: ExpandedImageProps) {
  return (
    <Overlay>
      <Image src={imageUrl} alt="Instagram" />
      <CloseButton onClick={onClose}>✕</CloseButton>
    </Overlay>
  );
}
export default ExpandedImage;
export type { ExpandedImageProps };
  
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Fondo semitransparente */
  z-index: 9999; /* Z-index alto para estar al frente de todos */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
`;
