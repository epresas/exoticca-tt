import { useNavigate } from "react-router-dom";
import {
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";

import useTable from "./useTable";
import { TableProps } from "src/domain/types";
import { Post } from "@features/posts/domain/types";
import {
  Actions,
  StyledTable,
  StyledTablePagination,
  StyledTableCell,
  StyledText,
  StyledVisibilityIcon,
  StyledEditNote,
} from "./Table.styles";

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
    <StyledText variant="body1" id={row.id}>
      {row.title}
    </StyledText>
  );

  return (
    <TableContainer component={Paper} style={{ maxHeight: 600 }}>
      <StyledTable stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <StyledTableCell key={col}>{col}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {pageData.map((row) => (
            <TableRow key={row.id as number}>
              {columns.map((col) => (
                <StyledTableCell key={col}>
                  {col === "title" ? (
                    getTitleCol(row as unknown as Post)
                  ) : col === "actions" ? (
                    <Actions>
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/posts/${row.id}`);
                        }}
                      >
                        <StyledVisibilityIcon />
                      </IconButton>
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/posts/${row.id}/edit`);
                        }}
                      >
                        <StyledEditNote />
                      </IconButton>
                    </Actions>
                  ) : (
                    <StyledText variant="body1">
                      {row[col] as string}
                    </StyledText>
                  )}
                </StyledTableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>

      <StyledTablePagination
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
