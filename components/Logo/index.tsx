import { LogoContainer } from "./styles";
import Image from "next/image";

interface LogoProps {
  theme?: "light" | "dark" | "color";
}

function Logo({ theme }: LogoProps) {
  return (
    <LogoContainer href="https://www.4agiledev.com/" theme={theme}>
      <div className="logo">
        <Image
          className="img"
          src={"https://www.4agiledev.com/logo1_4agile.svg"}
          alt={""}
          fill
        />
      </div>
    </LogoContainer>
  );
}

export default Logo;
