import { useShow } from "@/hook";
import colors from "@/styles/colors";

import { Rover } from "@/utils/types/models/PhotoModel";

import { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { styled } from "styled-components";
import { Container } from "./styles";

const rover: Rover[] = ["curiosity", "opportunity", "spirit"];

interface Props {
  onQuery?: (key: string, value: string | null) => any;
  setRover: React.Dispatch<React.SetStateAction<null | string>>;
}

function RoverFilter({ onQuery, setRover }: Props) {
  const { state, hide, toggle } = useShow({});
  const [current, setCurrent] = useState<number | null>(null);

  const _onQuery = (value: string | null) => {
    if (onQuery) onQuery("rover", value);

    setRover(value);

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
        </div>
      )}
    </Container>
  );
}

export default RoverFilter;

