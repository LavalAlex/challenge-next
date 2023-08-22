import { APP_NAME } from "@/config";
import { LogoContainer } from "./styles";

interface LogoProps {
  theme?: "light" | "dark" | "color";
}
function Logo({ theme }: LogoProps) {
  return (
    <LogoContainer href="/" theme={theme}>
      <p className="name">{APP_NAME}</p>
    </LogoContainer>
  );
}

export default Logo;
