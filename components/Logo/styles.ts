import colors from "@/styles/colors";
import Link from "next/link";
import { css, styled } from "styled-components";

const light = css`
  color: #${colors.hex.primary._900};
`;
const color = css`
  color: #${colors.hex.primary._500};
`;
const dark = css`
  color: #${colors.hex.primary._100};
`;

interface Props {
  theme?: "light" | "dark" | "color";
}
export const LogoContainer = styled(Link)<Props>`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  width: 10rem;

  .name {
    font-size: 1em;
    font-weight: 700;
  }

  &:hover {
    outline: none;
  }

  .logo {
    background: #${colors.hex.primary._500};

    width: 100%;

    .img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  ${({ theme }) => (!theme || theme === "light") && light}
  ${({ theme }) => theme === "dark" && dark}
  ${({ theme }) => theme === "color" && color}
`;
