import { css, styled } from "styled-components";

interface Props {
  isClickable?: boolean;
}
export const AvatarContainer = styled.div<Props>`
  color: #000;
  cursor: deafult;

  .user {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    transition: all 0.15s;
  }

  .name {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 0.8em;
  }

  .email {
    font-weight: 500;
    font-size: 0.75em;
  }

  ${({ isClickable }) =>
    isClickable &&
    css`
      cursor: pointer;

      .user {
        opacity: 0.8;
      }

      &:hover,
      &:focus {
        .user {
          opacity: 1;
        }
      }
    `}
`;

export const AvatarPlaceholderContainer = styled.div`
  .user {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    transition: all 0.15s;
    gap: 0.15em;
  }

  .name,
  .email {
    border-radius: 5px;
  }

  .name {
    height: 0.8em;
    width: 7em;
    background-color: #fff;
    opacity: 0.6;
  }

  .email {
    width: 10em;
    height: 0.5em;
    background-color: #fff;
    opacity: 0.5;
  }
`;
