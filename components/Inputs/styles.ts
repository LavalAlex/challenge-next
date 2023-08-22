import colors from "@/styles/colors";
import { css, styled } from "styled-components";

const _common = css`
  display: flex;
  flex-flow: column;

  label,
  input {
    display: block;
    width: 100%;
  }

  label {
    font-size: 0.8em;
    font-weight: 600;
    margin: 0 0 0.5em 0;
    color: #666;
    text-transform: capitalize;
  }

  input {
    font-size: 1em;
    padding: 0 0 0 0.75em;
  }

  &:focus-within {
    label {
      color: #${colors.hex.primary._500};
    }
  }
`;

export const TextInputContainer = styled.div`
  ${_common}

  input {
    border: 2px solid #888;
    border-radius: 5px;
    height: 2.25rem;
  }

  &:focus-within {
    input {
      border: 2px solid #${colors.hex.primary._500};
    }
  }
`;

export const PasswordInputContainer = styled.div`
  ${_common}

  input {
    border: 0px solid #0000;
    height: 100%;
  }

  > .password-input {
    display: flex;
    align-items: center;
    overflow: hidden;
    border: 2px solid #888;
    border-radius: 5px;
    height: 2.25rem;

    > button {
      display: block;
      height: 2.25rem;
      min-width: 2.25rem;
      background-color: #${colors.hex.light._900};
      transition: all 0.15s;

      &:focus,
      &:hover {
        background-color: #${colors.hex.primary._500};
        color: #fff;
      }
    }
  }

  &:focus-within {
    .password-input {
      border: 2px solid #${colors.hex.primary._500};
    }
  }
`;

export const TextareaInputContainer = styled.div`
  ${_common}

  textarea {
    border: 2px solid #888;
    border-radius: 5px;
    height: 2.25rem;
  }

  &:focus-within {
    textarea {
      border: 2px solid #${colors.hex.primary._500};
    }
  }
`;
