import { FunctionComponent, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { TableDividerType, TableSizeType } from "./Table.types";
import { useTheme } from "@/hooks";

type TableProps = {
  columns: ReactNode[];
  data: ReactNode[][];
  size?: TableSizeType;
  divider?: TableDividerType;
};

export const Table: FunctionComponent<TableProps> = ({
  columns,
  data,
  size = "md",
  divider = "grid",
}) => {
  const { theme } = useTheme();

  const paddingSizes: Record<TableSizeType, string> = {
    sm: theme.spacing[4],
    md: theme.spacing[5],
    lg: theme.spacing[6],
  };

  const padding = paddingSizes[size];

  return (
    <Container divider={divider}>
      <thead>
        <TableRowHeader divider={divider}>
          {columns.map((column, index) => {
            return (
              <TableHead padding={padding} divider={divider} key={index}>
                {column}
              </TableHead>
            );
          })}
        </TableRowHeader>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return (
            <TableRowData divider={divider} key={index}>
              {row.map((rowData, index) => {
                return (
                  <TableData padding={padding} divider={divider} key={index}>
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

const Container = styled.table<{ divider: TableDividerType }>`
  min-width: 35rem;
  width: 100%;
  //overflow-x: scroll;
  border-spacing: 0;
  border-color: ${({ theme }) => theme.colors.grey[5]};
  ${({ divider, theme }) => {
    const dividerStyles: Record<TableDividerType, FlattenSimpleInterpolation | undefined> = {
      clean: undefined,
      horizontal: undefined,
      vertical: undefined,
      grid: css`
        border: 1px solid ${theme.colors.grey[5]};
      `,
    };
    return dividerStyles[divider];
  }};
`;

const TableRowHeader = styled.tr<{ divider: TableDividerType }>`
  display: flex;
  border-color: ${({ theme }) => theme.colors.grey[5]};
  background-color: ${({ theme }) => theme.colors.grey[4]};
  ${({ divider, theme }) => {
    const dividerStyles: Record<TableDividerType, FlattenSimpleInterpolation | undefined> = {
      clean: undefined,
      horizontal: css`
        border-bottom: 1px solid ${theme.colors.grey[5]};
      `,
      vertical: css`
        border-bottom: 1px solid ${theme.colors.grey[5]};
      `,
      grid: css`
        border-bottom: 1px solid ${theme.colors.grey[5]};
      `,
    };
    return dividerStyles[divider];
  }}
`;

const TableHead = styled.th<{ padding: string; divider: TableDividerType }>`
  flex: 1;
  text-align: left;
  padding: ${({ padding }) => padding};
  border-color: ${({ theme }) => theme.colors.grey[5]};
  ${({ divider, theme }) => {
    const dividerStyles: Record<TableDividerType, FlattenSimpleInterpolation | undefined> = {
      clean: undefined,
      horizontal: undefined,
      vertical: css`
        border-right: 1px solid ${theme.colors.grey[5]};
        &:last-child {
          border-right: 0;
        }
      `,
      grid: css`
        border-right: 1px solid ${theme.colors.grey[5]};
        &:last-child {
          border-right: 0;
        }
      `,
    };
    return dividerStyles[divider];
  }}
`;

const TableRowData = styled.tr<{ divider: TableDividerType }>`
  display: flex;
  border-color: ${({ theme }) => theme.colors.grey[5]};
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.grey[1]};
  }
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.grey[2]};
  }
  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.colors.grey[3]};
  }
  ${({ divider, theme }) => {
    const dividerStyles: Record<TableDividerType, FlattenSimpleInterpolation | undefined> = {
      clean: undefined,
      horizontal: css`
        border-bottom: 1px solid ${theme.colors.grey[5]};
        &:last-child {
          border-bottom: 0;
        }
      `,
      vertical: undefined,
      grid: css`
        border-bottom: 1px solid ${theme.colors.grey[5]};
        &:last-child {
          border-bottom: 0;
        }
      `,
    };
    return dividerStyles[divider];
  }}
`;

const TableData = styled.td<{ padding: string; divider: TableDividerType }>`
  flex: 1;
  text-align: left;
  padding: ${({ padding }) => padding};
  border-color: ${({ theme }) => theme.colors.grey[5]};
  ${({ divider, theme }) => {
    const dividerStyles: Record<TableDividerType, FlattenSimpleInterpolation | undefined> = {
      clean: undefined,
      horizontal: undefined,
      vertical: css`
        border-right: 1px solid ${theme.colors.grey[5]};
        &:last-child {
          border-right: 0;
        }
      `,
      grid: css`
        border-right: 1px solid ${theme.colors.grey[5]};
        &:last-child {
          border-right: 0;
        }
      `,
    };
    return dividerStyles[divider];
  }}
`;
