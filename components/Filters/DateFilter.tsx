import { useShow } from "@/hook";
import { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { Container } from "./styles";
import { getRecentDates } from "@/utils/getArrayDate";

export interface Props {
  onQuery?: (key: string, value: string | null) => any;
}

const DATES = getRecentDates(5);

function DateFilter({ onQuery }: Props) {
  const { state, hide, toggle } = useShow({});
  const [current, setCurrent] = useState<number | null>(0);

  const _onQuery = (value: string | null) => {
    if (onQuery) onQuery("earthDate", value);

    hide();
  };

  return (
    <Container>
      <button onClick={toggle}>
        <BiFilterAlt size={10} />
      </button>
      {state && (
        <div className="options">
          {DATES.map((c, i) => (
            <>
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
            </>
          ))}
        </div>
      )}
    </Container>
  );
}

export default DateFilter;
