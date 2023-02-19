// import { useMemo } from "react";

import { useState } from 'react';
import type { UsePaginationProps } from './usePagination.type';

export function range(start: number, end: number) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}

export function usePagination({ page = 1, total, max = 5 }: UsePaginationProps) {
  const [activePage, setActivePage] = useState(page);
  const setPage = (pageNumber: number) => {
    if (pageNumber <= 0) {
      setActivePage(1);
    } else if (pageNumber > total) {
      setActivePage(total);
    } else {
      setActivePage(pageNumber);
    }
  };

  function getRange(): (number | '.')[] {
    let ranges: (number | '.')[] = [];
    if (max > total) {
      ranges = range(1, total);
    } else if (activePage >= 1 && activePage < max) {
      ranges = [...range(1, 5), '.', total];
    } else if (activePage <= total && activePage > total - max) {
      ranges = [1, '.', ...range(total - 5, total)];
    } else {
      ranges = [1, '.', ...range(activePage - 1, activePage + 1), '.', total];
    }

    return ranges;
  }

  const next = () => setActivePage(activePage + 1);
  const previous = () => setActivePage(activePage - 1);
  const first = () => setActivePage(1);
  const last = () => setActivePage(total);

  return {
    range: getRange(),
    setPage,
    active: activePage,
    next,
    previous,
    first,
    last,
  };
}
