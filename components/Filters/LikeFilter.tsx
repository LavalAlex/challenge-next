import { useShow } from "@/hook";
import { useState } from "react";
import { Container } from "./styles";
import { BiFilterAlt } from "react-icons/bi";
import { Pagination } from "@/hook/usePaginate";

const like = ["YES", "NO"];

export interface Props {
  setSeeLike: React.Dispatch<React.SetStateAction<boolean>>;
  pagination?: Pagination;
}

function LikeFilter({ setSeeLike, pagination }: Props) {
  const { state, hide, toggle } = useShow({});
  const [current, setCurrent] = useState<number | null>(null);

  const _onQuery = (value: string | null) => {
    if (value === "YES") setSeeLike(true);
    if (value === "NO") setSeeLike(false);
    if (pagination) pagination.goto(0);
    hide();
  };

  return (
    <Container>
      <button onClick={toggle}>
        <BiFilterAlt size={10} />
      </button>
      {state && (
        <div className="options">
          {like.map((p, i) => (
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

export default LikeFilter;
