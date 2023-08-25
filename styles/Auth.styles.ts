import { styled } from "styled-components";
import colors from "./colors";

export const LoginContainer = styled.main`
  position: relative;
  height: 100%;
  background: #${colors.hex.primary._500};

  display: grid;
  grid-template-columns: 1fr auto;

  .bottom {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    margin: 2rem 0 0 0;
    opacity: 0.5;

    .divider {
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 100%;

      &::before,
      &::after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: #000a;
      }
    }
  }

  .redirect {
    font-size: 0.75rem;
    margin: 2rem 0 1rem 0;
    text-decoration: underline;
    opacity: 0.75;

    &:hover {
      opacity: 1;
      outline: none;
    }
  }

  .left {
    position: relative;
    height: 100%;
    width: 100%;

    .img {
      object-fit: contain;
      object-position: center;
    }
  }

  .right {
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 2rem 0;
    background-color: #fff;
    border-left: 1px solid #${colors.hex.light._400};
    width: max-content;
    height: 100%;
    margin: 0 0 0 auto;
  }
`;

export const LoginForm = styled.form`
  padding: 0 4rem;
  display: flex;
  flex-flow: column;
  gap: 3rem;

  h2 {
    font-size: 1.15rem;
    text-align: center;
  }

  > .inputs {
    display: flex;
    flex-flow: column;
    gap: 1.5em;
    font-size: 0.9rem;
  }

  .error {
    font-size: 0.9em;
    background-color: #f33;
    padding: 0.25rem 0.5rem;
    color: #fff;
    font-weight: 500;
  }

  button[type="submit"] {
    border-radius: 5px;
    font-size: 0.85rem;
  }
`;

export const Banner = styled.div`
  position: relative;
  padding: 3rem;
  overflow: hidden;
  background-color: #fff;
  color: #fff;
  width: 75%;
  height: 100%;

  .img {
    object-fit: contain;
  }

  > * {
    text-align: center;
  }
  h1 {
    font-size: 1.5em;
  }
  p {
    font-size: 0.9em;
    color: #${colors.hex.primary._800};
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-25deg);
    font-size: 10rem;
    font-weight: bold;
    opacity: 0.1;
    p {
      color: #${colors.hex.primary._600};
    }
  }

  .section {
    position: absolute;
    top: 25%;
    left: 25%;
    transform: translate(-50%, -50%) rotate(-10deg);

    font-size: 5rem;
    font-weight: 900;
    white-space: nowrap;
    opacity: 0.075;
  }

  .deco1 {
    height: 10rem;
    width: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-35%, -50%);
    border: 0.75rem solid #a8d;
    border-radius: 100%;
  }
`;
