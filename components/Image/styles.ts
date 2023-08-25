import colors from "@/styles/colors";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: calc(20% - 25px);
  margin: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: width 0.3s ease-in-out;
  background: #${colors.hex.primary._500};
  position: relative;
  border: solid 0.01rem;

  /* Estilos de tarjeta expandida */
  &.expanded {
    width: 320px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover .overlay {
    opacity: 1;
  }

  .overlay p {
    margin: 0;
    padding: 10px;
    border: 2px solid #fff;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const IdAndDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
  font-size: 10px;
`;

export const Id = styled.div``;
export const Date = styled.div``;

export const NameCamera = styled.div`
  font-weight: bold;
`;

export const LikeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;


