import { useShow } from "@/hook";
import colors from "@/styles/colors";

import { Rover } from "@/utils/types/models/PhotoModel";

import { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { styled } from "styled-components";

const rover: Rover[] = ["curiosity", "opportunity", "spirit"];

interface Props {
  onQuery?: (key: string, value: string | null) => any;
}

function RoverFilter({ onQuery }: Props) {
  const { state, hide, toggle } = useShow({});
  const [current, setCurrent] = useState<number | null>(null);

  const _onQuery = (value: string | null) => {
    if (onQuery) onQuery("rover", value);
    hide();
  };

  return (
    <Container>
      <button onClick={toggle}>
        <BiFilterAlt size={10} />
      </button>
      {state && (
        <div className="options">
          {rover.map((c, i) => (
            // eslint-disable-next-line react/jsx-key
            <button
              disabled={current === i}
              className={current === i ? "active" : ""}
              onClick={() => {
                setCurrent(i);
                _onQuery(c);
              }}
            >
              {c}
            </button>
          ))}

          <button
            disabled={current === null}
            className={`reset ${current === null ? "active" : ""}`}
            onClick={() => {
              setCurrent(null);
              _onQuery?.(null);
            }}
          >
            {"all"}
          </button>
        </div>
      )}
    </Container>
  );
}

export default RoverFilter;

const Container = styled.div`
  .options {
    position: absolute;
    z-index: 9999;
    background: #fff;
    box-shadow: 0 7px 14px #0003;
    left: 0;
    top: calc(100% + 0.5rem);
    padding: 0.5em;
    display: flex;
    flex-flow: column;
    gap: 0.5em;
    border-radius: 5px;

    button {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5em 1em;
      text-transform: capitalize;
      background-color: #f0f0f0;
      border-radius: 5px;

      &:hover {
        outline: none;
        background-color: #ddd;
      }
    }
  }

  .reset {
    background: #${colors.hex.primary._500};
  }

  ::after {
    display: none;
  }

  button.active {
    background-color: #${colors.hex.primary._500};
    color: #fff;
    font-weight: 600;
    &:hover {
      background-color: #${colors.hex.primary._500};
      cursor: default;
    }
  }
`;
