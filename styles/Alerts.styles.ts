import { styled } from "styled-components";

export const Alerts = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1rem;
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  z-index: 99999;
  max-width: 275px;
  width: 100%;

  .alert {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    cursor: pointer;

    .icon-container {
      display: grid;
      place-items: center;
      width: 2.5rem;
      height: 2.5rem;
      .icon {
      }
    }

    .message {
      font-weight: 700;
      font-size: 0.8em;
    }
    .close {
      margin: 0 0 0 auto;
    }
  }

  .info {
    box-shadow: 0 5px 10px #0003;
    background-color: #ddd;
    color: #777;
  }
  .error {
    box-shadow: 0 5px 10px #f336;
    background-color: #f33;
    color: #fff;
  }
  .success {
    box-shadow: 0 5px 10px #0d04;
    background-color: #2aee41;
    color: #fff;
  }
  .warning {
    box-shadow: 0 5px 10px #f928;
    background-color: #f92;
    color: #fff;
  }
`;
