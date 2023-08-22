import { HTMLProps, useId } from "react";
import { TextareaInputContainer } from "../styles";

interface Props extends HTMLProps<HTMLTextAreaElement> {
  label?: string;
}
function TextareaInput({ label, ...props }: Props) {
  const id = useId();
  return (
    <TextareaInputContainer>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea {...props} />
    </TextareaInputContainer>
  );
}

export default TextareaInput;
