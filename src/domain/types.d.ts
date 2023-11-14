export interface TableProps {
  data: Record<string, unknown>[];
  columns: string[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export type TablePropsWithoutColumns = Omit<TableProps, "columns">;
