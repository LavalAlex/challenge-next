import { HTMLProps, useId } from "react";
import { TextInputContainer } from "../styles";

type InputProps = HTMLProps<HTMLInputElement>;
interface Props extends Omit<InputProps, "label"> {
  label?: string;
}
function TextInput({ label, ...props }: Props) {
  const id = useId();

  return (
    <TextInputContainer>
      <label htmlFor={id}>{label}</label>
      <input {...props} type="text" id={id} />
    </TextInputContainer>
  );
}

export default TextInput;
