const PER_PAGE = 10;

function getNumberOfPages(total: number) {
  return Math.ceil(total / PER_PAGE);
}

function paginate(current: number, total: number) {
  const pages = getNumberOfPages(total);

  return {
    pages,
    from: current * 10,
    to: current * 10 + 10,
  };
}

export default PER_PAGE;
