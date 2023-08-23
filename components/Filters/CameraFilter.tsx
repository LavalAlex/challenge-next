import { useShow } from "@/hook";
import colors from "@/styles/colors";
import { CameraName } from "@/utils/types/models/PhotoModel";
import { Priority as TPriority } from "@/utils/types/models/TicketModel";
import { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { styled } from "styled-components";

const cameras: CameraName[] = [
  "FHAZ",
  "RHAZ",
  "MAST",
  "CHEMCAM",
  "MAHLI",
  "MARDI",
  "NAVCAM",
  "PANCAM",
  "MINITES",
];

interface Props {
  onQuery?: (key: string, value: string | null) => any;
}

function CameraFilter({ onQuery }: Props) {
  const { state, hide, toggle } = useShow({});
  const [current, setCurrent] = useState<number | null>(null);

  const _onQuery = (value: string | null) => {
    if (onQuery) onQuery("camera", value);
    hide();
  };

  return (
    <Container>
      <button onClick={toggle}>
        <BiFilterAlt size={10} />
      </button>
      {state && (
        <div className="options">
          {cameras.map((p, i) => (
            // eslint-disable-next-line react/jsx-key
            <button
              disabled={current === i}
              className={current === i ? "active" : ""}
              onClick={() => {
                setCurrent(i);
                _onQuery(p);
              }}
            >
              {p}
            </button>
          ))}

          <button
            className={current === null ? "active" : ""}
            onClick={() => {
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

export default CameraFilter;

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
    width: 100%;

    button {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1em;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5em 1em;
      text-transform: capitalize;
      background-color: #f0f0f0;
      border-radius: 5px;
    }
    .priority {
      width: 100%;
    }
  }

  button.active {
    background: #${colors.hex.primary._500};
    color: #fff;
    font-weight: 600;
  }

  ::after {
    display: none;
  }
`;
