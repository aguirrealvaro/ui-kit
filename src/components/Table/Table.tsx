import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { TableSizeType } from "./Table.types";
import { theme } from "@/css";

type TableProps = {
  columns: ReactNode[];
  data: ReactNode[][];
  size?: TableSizeType;
};

export const Table: FunctionComponent<TableProps> = ({ columns, data, size = "md" }) => {
  const paddingSizes: Record<TableSizeType, string> = {
    sm: theme.spacing[4],
    md: theme.spacing[5],
    lg: theme.spacing[6],
  };

  const padding = paddingSizes[size];

  return (
    <Container>
      <StyledTable>
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
      </StyledTable>
    </Container>
  );
};

const Container = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const TableRowHeader = styled.tr`
  display: flex;
  background-color: ${({ theme }) => theme.colors.grey[200]};
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: ${({ theme }) => {
    const {
      borderRadius: { md },
    } = theme;
    return `${md} ${md} 0 0`;
  }};
`;

const TableHead = styled.th<{ padding: string }>`
  flex: 1;
  text-align: left;
  padding: ${({ padding }) => padding};
`;

const TableRowData = styled.tr`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.colors.white};
  }
  border-left: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-right: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};
  &:last-child {
    border-radius: ${({ theme }) => {
      const {
        borderRadius: { md },
      } = theme;
      return `0 0 ${md} ${md}`;
    }};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey[300]};
  }
`;

const TableData = styled.td<{ padding: string }>`
  flex: 1;
  text-align: left;
  padding: ${({ padding }) => padding};
`;
