import colors from "@/styles/colors";
import config from "@/styles/config";
import Link from "next/link";
import { styled } from "styled-components";

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: ${config.nav_size};
  padding: 0 2rem 0 0;

  display: grid;
  grid-template-columns: 1fr auto 1fr;

  background: #${colors.hex.primary._500};
  color: #${colors.hex.primary._900};
`;

export const NavbarLeft = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 12rem;
    height: 100%;
    background-color: #fff;
    clip-path: polygon(0 0, 65% 0, 100% 50%, 65% 100%, 0 100%);
  }
`;

export const NavbarMiddle = styled.div`
  position: relative;
`;

export const NavbarRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
`;

export const NavbarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  text-transform: capitalize;
  font-size: 0.85em;
  font-weight: 600;
  height: 100%;
  transition: all 0.15s;
  color: #${colors.hex.primary._800};

  ::after {
    content: "";
    position: absolute;
    bottom: 0.85em;
    left: 50%;
    width: 0;

    transform: translate(-50%, 0);
    height: 2px;
    background-color: #${colors.hex.primary._900};
    transition: all 0.25s;
  }

  outline: none !important;
  &:hover,
  &:focus {
    color: #${colors.hex.light._900};
    outline: none !important;

    ::after {
      width: 100%;
    }
  }
`;
