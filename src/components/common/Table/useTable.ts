import { useCallback, useEffect, useState } from "react";
import { TablePropsWithoutColumns } from "src/domain/types";
const useTable = ({
  data,
  currentPage,
  setCurrentPage,
}: TablePropsWithoutColumns) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [pageData, setPageData] = useState([] as Record<string, unknown>[]);

  const handleChangePage = useCallback(
    (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setCurrentPage(newPage);
    },
    []
  );

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setCurrentPage(0);
    },
    [setCurrentPage, setRowsPerPage]
  );

  useEffect(() => {
    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setPageData(data.slice(startIndex, endIndex));
  }, [data, currentPage, rowsPerPage]);
  return {
    state: { rowsPerPage, pageData },
    actions: {
      setRowsPerPage,
      handleChangePage,
      handleChangeRowsPerPage,
    },
  };
};

export default useTable;
