import { Pagination } from "@/hook/usePaginate";
import { preferedDate } from "@/utils/date";
import { getLocal, setLocal } from "@/utils/helpers";
import timestamp from "@/utils/timestamp";

import { ReactNode, useEffect, useId, useMemo, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import RoverFilter from "./RoverFilter";

import CameraFilter from "./CameraFilter";

import {
  Buttons,
  TableContainer,
  TicketsTable,
} from "./styles";
import IPhotoModel from "@/utils/types/models/PhotoModel";

interface Data {
  children: ReactNode;
  className?: string;
}
const THead = ({ children, className }: Data) => (
  <th className={className}>
    {typeof children === "string" ? <p>{children}</p> : children}
  </th>
);
const TData = ({ children, className }: Data) => (
  <td className={className}>
    {typeof children === "string" ? <p>{children}</p> : children}
  </td>
);

const PAGES_TO_SHOW = 5;
interface Props {
  data: IPhotoModel[];
  onClick?: (photos: IPhotoModel) => any;
  paginate?: Pagination;
  onQuery?: (key: string, value: string | null) => any;
  filters?: boolean;
}

function Filters({ data, filters, onClick, onQuery, paginate }: Props) {
  const table_id = useId();

  const _onClick = (ticket: IPhotoModel) => {
    if (onClick) onClick(ticket);
  };

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

  const [_date, _setDate] = useState(new Date());
  const [_dateType, _setDateType] = useState<boolean>(false);

  useEffect(() => {
    _setDateType(getLocal("__prefered_date") === "text" ? true : false);
    const interval = setInterval(() => _setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);



  return (
    <TableContainer>
      {/* <div className="top">
        <button onClick={handleDate}>
          {_dateType ? (
            <time dateTime={_date.toString()}>
              {time.dd} de{" "}
              <span className="cap">{toSpanish(time.month.full)}</span> -{" "}
              {time.hours}:{time.minutes}
            </time>
          ) : (
            <time dateTime={_date.toString()}>
              {time.dd}/{time.mm} - {time.hours}:{time.minutes}
            </time>
          )}
        </button>
      </div> */}

      {/* {paginate && (
        <TableMetadata>
          <p>
            Tickets {paginate.from + 1} a{" "}
            {paginate.to > paginate.total ? paginate.total : paginate.to}
          </p>
          <p>Total {paginate?.total || 0}</p>
        </TableMetadata>
      )} */}

      <div className="container">
        <TicketsTable $clickable={!!onClick}>
          <thead>
            <tr>
              <THead>
                <div className="flex">
                  <p>Camera</p>
                  {filters && <CameraFilter onQuery={onQuery} />}
                </div>
              </THead>
              <THead>
                <div className="flex">
                  <p>Rover</p>
                  {filters && <RoverFilter onQuery={onQuery} />}
                </div>
              </THead>
            </tr>
          </thead>
        </TicketsTable>
        {!!data.length ? null : (
          <p className="empty">Not Found Photos</p>
        )}
      </div>

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
              // eslint-disable-next-line react/jsx-key
              <button
                onClick={() => paginate.goto(i)}
                disabled={i + 1 === paginate.current}
              >
                {i + 1}
              </button>
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
    </TableContainer>
  );
}

export default Filters;

const printDate = (str: string) => {
  const date = timestamp(str);
  return `${date.dd}/${date.mm}/${date.yyyy} - ${date.hours}:${date.minutes}`;
};
