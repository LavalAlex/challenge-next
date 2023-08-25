import colors from "@/styles/colors";
import { styled } from "styled-components";

const PrimaryButton = styled.button`
  padding: 0.75em 1em;

  outline: 2px solid transparent;
  outline-offset: 0.15em;

  box-shadow: 0 5px 10px #${colors.hex.primary._500}22;
  background-color: #${colors.hex.primary._500};
  border: 2px solid #eee0;
  color: #000;

  font-weight: 600;

  transform: translate(0, 0) scale(100%);
  transition: all 0.15s;

  &:hover,
  &:focus {
    background-color: #${colors.hex.primary._100};
    box-shadow: 0 5px 10px #${colors.hex.primary._500}44;
    color: #fff;
  }

  &:focus {
    outline: 0.15em solid #${colors.hex.primary._500}aa;
  }

  &:disabled {
    box-shadow: 0 5px 10px #${colors.hex.primary._500}00;

    background-color: #f0f0f0;
    color: #bbb;
    border: 2px solid #eee;

    cursor: default;
  }
`;

export default PrimaryButton;
