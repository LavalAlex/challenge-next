import { LogoContainer } from "./styles";
import Image from "next/image";

interface LogoProps {
  theme?: "light" | "dark" | "color";
}

function Logo({ theme }: LogoProps) {
  return (
    <LogoContainer href="/" theme={theme}>
      <div className="logo">
        <Image
          className="img"
          src={"https://www.4agiledev.com/favicon.ico"}
          alt={""}
          width={40}
          height={40}
        />
      </div>
    </LogoContainer>
  );
}

export default Logo;
