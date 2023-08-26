import { Pagination } from "@/hook/usePaginate";

import { ReactNode, useMemo } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import RoverFilter from "./DateFilter";

import CameraFilter from "./CameraFilter";

import { ButtonFilter, Buttons, FilterContainer } from "./styles";
import IPhotoModel from "@/utils/types/models/PhotoModel";
import LikeFilter from "./LikeFilter";

interface Data {
  children: ReactNode;
  className?: string;
}
const THead = ({ children, className }: Data) => (
  <th className={className}>
    {typeof children === "string" ? <p>{children}</p> : children}
  </th>
);

const PAGES_TO_SHOW = 5;
interface Props {
  data: IPhotoModel[];
  paginate?: Pagination;
  onQuery?: (key: string, value: string | null) => any;
  filters?: boolean;
  setSeeLike: React.Dispatch<React.SetStateAction<boolean>>;
}

function Filters({ data, filters, onQuery, paginate, setSeeLike }: Props) {
  const pages = useMemo(() => {
    if (!paginate) return [];
    const halfMaxPages = Math.ceil(PAGES_TO_SHOW / 2);
    let startPage = Math.max(paginate.current - halfMaxPages, 0);
    let endPage = Math.min(
      startPage + PAGES_TO_SHOW - 1,
      paginate.total_pages - 1
    );

    if (endPage - startPage < PAGES_TO_SHOW - 1) {
      startPage = Math.max(endPage - PAGES_TO_SHOW + 1, 0);
    }
    const list = Array.from({ length: endPage - startPage + 1 }).map(
      (_, i) => i + startPage
    );

    return list;
  }, [paginate]);

  return (
    <FilterContainer>
      <div className="container">
        <ButtonFilter>
          <thead>
            <tr>
              <THead>
                <div className="flex">
                  <p>Like</p>
                  {filters && (
                    <LikeFilter setSeeLike={setSeeLike} pagination={paginate} />
                  )}
                </div>
              </THead>
              <THead>
                <div className="flex">
                  <p>Date</p>
                  {filters && <RoverFilter onQuery={onQuery} />}
                </div>
              </THead>
              <THead>
                <div className="flex">
                  <p>Camera</p>
                  {filters && <CameraFilter onQuery={onQuery} />}
                </div>
              </THead>
            </tr>
          </thead>
        </ButtonFilter>
      </div>
      {!!data.length ? null : <p className="empty">Photos Not Found.</p>}
      {paginate &&
      typeof paginate.current === "number" &&
      typeof paginate.total_pages === "number" &&
      pages.length ? (
        <Buttons>
          {!pages.includes(0) && (
            <button onClick={paginate.prev}>
              <BiChevronLeft />
            </button>
          )}
          <div className="pages">
            {!pages.includes(0) && (
              <>
                <button onClick={() => paginate.goto(0)}>1</button>
                <span>...</span>
              </>
            )}
            {pages.map((i) => (
              <>
                <button
                  onClick={() => paginate.goto(i)}
                  disabled={i + 1 === paginate.current}
                >
                  {i + 1}
                </button>
              </>
            ))}
            {!pages.includes(paginate.total_pages - 1) && (
              <>
                <span>...</span>
                <button onClick={() => paginate.goto(paginate.total_pages - 1)}>
                  {paginate.total_pages}
                </button>
              </>
            )}
          </div>
          {!pages.includes(paginate.total_pages - 1) && (
            <button onClick={paginate.next}>
              <BiChevronRight />
            </button>
          )}
        </Buttons>
      ) : null}
    </FilterContainer>
  );
}

export default Filters;
