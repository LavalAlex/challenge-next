import { keyframes, styled } from "styled-components";

const anim = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
export const Spinner = styled.div`
  --spinner-size: 2em;
  display: block;

  width: var(--spinner-size);
  height: var(--spinner-size);

  border: 3px solid #fff;
  border-bottom: 3px solid #fff0;
  border-radius: 100%;

  animation: ${anim} 1s infinite linear;
`;
