import { FunctionComponent, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { PADDINGS_SIZES } from "./Table.constants";
import { TableDividerType, TableSizeType } from "./Table.types";

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
  const padding = PADDINGS_SIZES[size];

  return (
    <Container divider={divider}>
      <thead>
        <TableRowHeader divider={divider}>
          {columns.map((column, index) => {
            return (
              <TableHead size={padding} divider={divider} key={index}>
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
                  <TableData size={padding} divider={divider} key={index}>
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
  min-width: 600px;
  width: 100%;
  //overflow-x: scroll;
  border-spacing: 0;
  border-color: ${({ theme }) => theme.colors.grey[6]};
  ${({ divider, theme }) => {
    const dividerStyles: Record<TableDividerType, FlattenSimpleInterpolation | undefined> = {
      clean: undefined,
      horizontal: undefined,
      vertical: undefined,
      grid: css`
        border: 1px solid ${theme.colors.grey[6]};
      `,
    };
    return dividerStyles[divider];
  }};
`;

const TableRowHeader = styled.tr<{ divider: TableDividerType }>`
  display: flex;
  border-color: ${({ theme }) => theme.colors.grey[6]};
  background-color: ${({ theme }) => theme.colors.grey[4]};
  ${({ divider, theme }) => {
    const dividerStyles: Record<TableDividerType, FlattenSimpleInterpolation | undefined> = {
      clean: undefined,
      horizontal: css`
        border-bottom: 1px solid ${theme.colors.grey[6]};
      `,
      vertical: css`
        border-bottom: 1px solid ${theme.colors.grey[6]};
      `,
      grid: css`
        border-bottom: 1px solid ${theme.colors.grey[6]};
      `,
    };
    return dividerStyles[divider];
  }}
`;

const TableHead = styled.th<{ size: number; divider: TableDividerType }>`
  flex: 1;
  text-align: left;
  padding: ${({ size }) => `${size}px`};
  border-color: ${({ theme }) => theme.colors.grey[6]};
  ${({ divider, theme }) => {
    const dividerStyles: Record<TableDividerType, FlattenSimpleInterpolation | undefined> = {
      clean: undefined,
      horizontal: undefined,
      vertical: css`
        border-right: 1px solid ${theme.colors.grey[6]};
        &:last-child {
          border-right: 0;
        }
      `,
      grid: css`
        border-right: 1px solid ${theme.colors.grey[6]};
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
  border-color: ${({ theme }) => theme.colors.grey[6]};
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
        border-bottom: 1px solid ${theme.colors.grey[6]};
        &:last-child {
          border-bottom: 0;
        }
      `,
      vertical: undefined,
      grid: css`
        border-bottom: 1px solid ${theme.colors.grey[6]};
        &:last-child {
          border-bottom: 0;
        }
      `,
    };
    return dividerStyles[divider];
  }}
`;

const TableData = styled.td<{ size: number; divider: TableDividerType }>`
  flex: 1;
  text-align: left;
  padding: ${({ size }) => `${size}px`};
  border-color: ${({ theme }) => theme.colors.grey[6]};
  ${({ divider, theme }) => {
    const dividerStyles: Record<TableDividerType, FlattenSimpleInterpolation | undefined> = {
      clean: undefined,
      horizontal: undefined,
      vertical: css`
        border-right: 1px solid ${theme.colors.grey[6]};
        &:last-child {
          border-right: 0;
        }
      `,
      grid: css`
        border-right: 1px solid ${theme.colors.grey[6]};
        &:last-child {
          border-right: 0;
        }
      `,
    };
    return dividerStyles[divider];
  }}
`;
