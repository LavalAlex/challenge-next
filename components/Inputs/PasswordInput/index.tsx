import { useShow } from "@/hook";
import { HTMLProps, useId } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { PasswordInputContainer } from "../styles";

type InputProps = HTMLProps<HTMLInputElement>;
interface Props extends Omit<InputProps, "label"> {
  label?: string;
}
function PasswordInput({ label, ...props }: Props) {
  const { state: showPassowrd, toggle } = useShow({ init: false });
  const id = useId();

  return (
    <PasswordInputContainer>
      <label htmlFor={id}>{label}</label>

      <div className="password-input">
        <input {...props} type={showPassowrd ? "text" : "password"} id={id} />
        <button onClick={toggle} type="button">
          {showPassowrd ? <BiHide size={16} /> : <BiShow size={18} />}
        </button>
      </div>
    </PasswordInputContainer>
  );
}

export default PasswordInput;
