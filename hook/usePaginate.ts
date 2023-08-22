import { useState } from "react";

export interface Pagination {
  current: number;
  total_pages: number;

  from: number;
  to: number;

  next: () => any;
  prev: () => any;
  goto: (n: number) => any;

  total: number;
}

export const PER_PAGE = 10;
function usePaginate(
  page: number,
  total: number,
  per_page: number = PER_PAGE
): Pagination {
  const [_page, _setPage] = useState<number>(page);
  const MAX_PAGE = Math.ceil(total / per_page);

  const next = () => {
    if (_page + 1 < MAX_PAGE) _setPage((old) => old + 1);
  };
  const prev = () => {
    if (_page - 1 >= 0) _setPage((old) => old - 1);
  };

  const goto = (p: number) => {
    if (p >= 0 && p < MAX_PAGE) _setPage(p);
  };

  return {
    current: _page + 1,
    total_pages: MAX_PAGE,

    from: _page * per_page,
    to: _page * per_page + per_page,

    goto,

    next,
    prev,

    total,
  };
}

export default usePaginate;
