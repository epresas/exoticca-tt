import { useNavigate } from "react-router-dom";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Typography,
} from "@mui/material";
import useTable from "./useTable";
import { TableProps } from "src/domain/types";
import { isPrime } from "@utils/isPrime";
import { Post } from "@features/posts/domain/types";

const Table: React.FC<TableProps> = ({
  data,
  columns,
  currentPage,
  setCurrentPage,
}) => {
  const {
    state: { pageData, rowsPerPage },
    actions: { handleChangePage, handleChangeRowsPerPage },
  } = useTable({ data, currentPage, setCurrentPage });
  const navigate = useNavigate();

  const getTitleCol = (row: Post) => (
    <Typography
      variant="body1"
      sx={{ fontStyle: `${isPrime(row.id) ? "italic" : "normal"}` }}
    >
      {row.title}
    </Typography>
  );

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {pageData.map((row) => (
            <TableRow
              key={row.id as number}
              onClick={() => navigate(`/posts/${row.id}`)}
            >
              {columns.map((col) => (
                <TableCell key={col}>
                  {col === "title" ? (
                    getTitleCol(row as unknown as Post)
                  ) : (
                    <Typography variant="body1">
                      {row[col] as string}
                    </Typography>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>

      <TablePagination
        count={data.length}
        component="div"
        page={currentPage}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
      />
    </TableContainer>
  );
};

export default Table;
