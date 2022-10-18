import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { TableSizeType } from "./Table.types";
import { useTheme } from "@/hooks";

type TableProps = {
  columns: ReactNode[];
  data: ReactNode[][];
  size?: TableSizeType;
};

export const Table: FunctionComponent<TableProps> = ({ columns, data, size = "md" }) => {
  const { theme } = useTheme();

  const paddingSizes: Record<TableSizeType, string> = {
    sm: theme.spacing[4],
    md: theme.spacing[5],
    lg: theme.spacing[6],
  };

  const padding = paddingSizes[size];

  return (
    <Container>
      <thead>
        <TableRowHeader>
          {columns.map((column, index) => {
            return (
              <TableHead padding={padding} key={index}>
                {column}
              </TableHead>
            );
          })}
        </TableRowHeader>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return (
            <TableRowData key={index}>
              {row.map((rowData, index) => {
                return (
                  <TableData padding={padding} key={index}>
                    {rowData}
                  </TableData>
                );
              })}
            </TableRowData>
          );
        })}
      </tbody>
    </Container>
  );
};

const Container = styled.table`
  min-width: 35rem;
  width: 100%;
  border-spacing: 0;
  border: 1px solid ${({ theme }) => theme.colors.grey[3]};
`;

const TableRowHeader = styled.tr`
  display: flex;
  background-color: ${({ theme }) => theme.colors.grey[2]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[3]};
`;

const TableHead = styled.th<{ padding: string }>`
  flex: 1;
  text-align: left;
  padding: ${({ padding }) => padding};
`;

const TableRowData = styled.tr`
  display: flex;
  background-color: ${({ theme }) => theme.assets.bgSecondary};
  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.assets.hoverSecondary};
  }
  border-bottom: 1px solid ${({ theme }) => theme.assets.borderSecondary};
  &:last-child {
    border-bottom: 0;
  }
`;

const TableData = styled.td<{ padding: string }>`
  flex: 1;
  text-align: left;
  padding: ${({ padding }) => padding};
`;
