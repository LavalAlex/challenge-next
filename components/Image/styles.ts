import styled from "styled-components";

export const CardContainer = styled.div`
  width: calc(20% - 20px);
  margin: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: width 0.3s ease-in-out;
  background-color: #fff;
  position: relative;

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

  /* Aplicar zoom al pasar el mouse por encima */
  &:hover {
    transform: scale(1.05);
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

export const Overlay = styled.div`
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
`;

export const OverlayText = styled.p`
  margin: 0;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IdAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Id = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  margin: 5px;
`;

export const Date = styled.div`
  margin: 5px;
  padding: 5px;
`;

export const LikeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const NameCamera = styled.div`
  font-weight: bold;
  padding: 5px;
`;
