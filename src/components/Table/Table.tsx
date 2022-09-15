import { FunctionComponent, ReactNode } from "react";
import styled, { css } from "styled-components";
import { PADDINGS_SIZES } from "./Table.constants";
import { DividerType, SizeType } from "./Table.types";

type TableProps = {
  columns: ReactNode[];
  data: ReactNode[][];
  size?: SizeType;
  divider?: DividerType;
};

export const Table: FunctionComponent<TableProps> = ({
  columns,
  data,
  size = "md",
  divider = "vertical",
}) => {
  const padding = PADDINGS_SIZES[size];

  return (
    <Container divider={divider}>
      <thead>
        <TableRow divider={divider}>
          {columns.map((column) => {
            return (
              <TableHead size={padding} divider={divider}>
                {column}
              </TableHead>
            );
          })}
        </TableRow>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <TableRow divider={divider}>
              {row.map((rowData) => {
                return (
                  <TableData size={padding} divider={divider}>
                    {rowData}
                  </TableData>
                );
              })}
            </TableRow>
          );
        })}
      </tbody>
    </Container>
  );
};

const Container = styled.table<{ divider: DividerType }>`
  min-width: 100%;
  border-spacing: 0;
  ${({ divider }) => {
    if (divider === "clean") return;
    if (divider === "horizontal") return;
    if (divider === "vertical") return;
    if (divider === "grid") {
      return css`
        border: 1px solid;
      `;
    }
  }}
`;

const TableRow = styled.tr<{ divider: DividerType }>`
  display: flex;
  ${({ divider }) => {
    if (divider === "clean") return;
    if (divider === "horizontal")
      return css`
        border-bottom: 1px solid;
        &:last-child {
          border-bottom: 0;
        }
        &:first-child {
          border-bottom: 1px solid;
        }
      `;
    if (divider === "vertical") return;
    if (divider === "grid") {
      return css`
        border-bottom: 1px solid;
        &:last-child {
          border-bottom: 0;
        }
        &:first-child {
          border-bottom: 1px solid;
        }
      `;
    }
  }}
`;

const TableHead = styled.th<{ size: number; divider: DividerType }>`
  flex: 1;
  text-align: left;
  padding: ${({ size }) => `${size}px`};
  ${({ divider }) => {
    if (divider === "clean") return;
    if (divider === "horizontal") return;
    if (divider === "vertical")
      return css`
        border-right: 1px solid;
        &:last-child {
          border-right: 0;
        }
      `;
    if (divider === "grid") {
      return css`
        border-right: 1px solid;
        &:last-child {
          border-right: 0;
        }
      `;
    }
  }}
`;

const TableData = styled.td<{ size: number; divider: DividerType }>`
  flex: 1;
  text-align: left;
  padding: ${({ size }) => `${size}px`};
  ${({ divider }) => {
    if (divider === "clean") return;
    if (divider === "horizontal") return;
    if (divider === "vertical") {
      return css`
        border-right: 1px solid;
        &:last-child {
          border-right: 0;
        }
      `;
    }
    if (divider === "grid") {
      return css`
        border-right: 1px solid;
        &:last-child {
          border-right: 0;
        }
      `;
    }
  }}
`;
