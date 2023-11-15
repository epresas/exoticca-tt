import {
  Table,
  TablePagination as MuiPagination,
  TableCell,
  Typography,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditNote from "@mui/icons-material/EditNote";
import { tableCellClasses } from "@mui/material/TableCell";
import { isPrime } from "@utils/isPrime";
import styled from "styled-components";

export const Actions = styled.div`
  display: flex;
  place-content: space-between;
  place-items: center;
  width: 100%;
`;

export const StyledTable = styled(Table)`
  background-color: ${({ theme }) => theme.colors.surface[200]};
  color: ${({ theme }) => theme.colors.basics[100]};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 960px;
  min-height: 600px;
  padding: 2rem;
  position: relative;
  max-height: 600px;
  & .MuiTableCell-stickyHeader {
    background-color: ${({ theme }) => theme.colors.surface[200]};
  }
`;

export const StyledTablePagination = styled(MuiPagination)`
  background-color: ${({ theme }) => theme.colors.surface[200]};
  &.MuiTablePagination-root {
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
  &.MuiTablePagination-root,
  & .MuiTablePagination-selectIcon {
    color: ${({ theme }) => theme.colors.basics[100]};
  }
  & .MuiTablePagination-actions button {
    &.Mui-disabled {
      color: ${({ theme }) => theme.colors.surfaceMixed[600]};
    }
    color: ${({ theme }) => theme.colors.basics[100]};
  }
`;
export const StyledTableCell = styled(TableCell)`
  color: ${({ theme }) => theme.colors.basics[100]};
  &.${tableCellClasses.head} {
    font-family: ${({ theme }) => theme.fonts.secondary};
    text-transform: capitalize;
    text-align: center;
    color: ${({ theme }) => theme.colors.basics[100]};
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
  &.${tableCellClasses.body} {
    color: ${({ theme }) => theme.colors.basics[600]};
  }
`;

export const StyledText = styled(Typography)<{ id: number }>`
  &.MuiTypography-root {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-style: ${({ id }) => (isPrime(id) ? "italic" : "normal")};
  }
`;

export const StyledIconButtons = styled(IconButton)`
  &.MuiIconButton-root {
    padding: 0.5rem;
  }
`;

export const StyledVisibilityIcon = styled(VisibilityIcon)`
  &.MuiSvgIcon-root {
    fill: ${({ theme }) => theme.colors.basics[600]};
    font-size: ${({ theme }) => theme.fontSizes.large};
    &:hover {
      fill: ${({ theme }) => theme.colors.primary[500]};
    }
  }
`;

export const StyledEditNote = styled(EditNote)`
  &.MuiSvgIcon-root {
    fill: ${({ theme }) => theme.colors.basics[600]};
    font-size: ${({ theme }) => theme.fontSizes.large};
    &:hover {
      fill: ${({ theme }) => theme.colors.primary[500]};
    }
  }
`;
