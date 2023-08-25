import { useShow } from "@/hook";
import { CameraName } from "@/utils/types/models/PhotoModel";
import { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { Container } from "./styles";

const curiosity: CameraName[] = [
  "FHAZ",
  "RHAZ",
  "MAST",
  "CHEMCAM",
  "MAHLI",
  "MARDI",
  "NAVCAM",
];

const both: CameraName[] = ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"];

export interface Props {
  onQuery?: (key: string, value: string | null) => any;
  rover?: string | null;
}

function CameraFilter({ onQuery, rover }: Props) {
  const { state, hide, toggle } = useShow({});
  const [current, setCurrent] = useState<number | null>(0);

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
          {rover == "curiosity"
            ? curiosity.map((p, i) => (
                <>
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
                </>
              ))
            : both.map((p, i) => (
                <>
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
                </>
              ))}
        </div>
      )}
    </Container>
  );
}

export default CameraFilter;
