import { FunctionComponent, ReactNode } from "react";
import styled, { css } from "styled-components";
import { BORDER_COLOR, PADDINGS_SIZES } from "./Table.constants";
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
  divider = "grid",
}) => {
  const padding = PADDINGS_SIZES[size];

  return (
    <Container divider={divider}>
      <thead>
        <TableRowHeader divider={divider}>
          {columns.map((column) => {
            return (
              <TableHead size={padding} divider={divider}>
                {column}
              </TableHead>
            );
          })}
        </TableRowHeader>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <TableRowData divider={divider}>
              {row.map((rowData) => {
                return (
                  <TableData size={padding} divider={divider}>
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

const Container = styled.table<{ divider: DividerType }>`
  min-width: 500px;
  width: 100%;
  overflow: scroll;
  border-spacing: 0;
  border-color: rgba(0, 0, 0, 0.12);
  ${({ divider }) => {
    if (divider === "clean") return;
    if (divider === "horizontal") return;
    if (divider === "vertical") return;
    if (divider === "grid") {
      return css`
        border: 1px solid ${BORDER_COLOR};
      `;
    }
  }}
`;

const TableRowHeader = styled.tr<{ divider: DividerType }>`
  display: flex;
  border-color: rgba(0, 0, 0, 0.12);
  ${({ divider }) => {
    if (divider === "clean") return;
    if (divider === "horizontal")
      return css`
        border-bottom: 1px solid ${BORDER_COLOR};
      `;
    if (divider === "vertical")
      return css`
        border-bottom: 1px solid ${BORDER_COLOR};
      `;
    if (divider === "grid") {
      return css`
        border-bottom: 1px solid ${BORDER_COLOR};
      `;
    }
  }}
`;

const TableHead = styled.th<{ size: number; divider: DividerType }>`
  flex: 1;
  text-align: left;
  padding: ${({ size }) => `${size}px`};
  border-color: rgba(0, 0, 0, 0.12);
  ${({ divider }) => {
    if (divider === "clean") return;
    if (divider === "horizontal") return;
    if (divider === "vertical")
      return css`
        border-right: 1px solid ${BORDER_COLOR};
        &:last-child {
          border-right: 0;
        }
      `;
    if (divider === "grid") {
      return css`
        border-right: 1px solid ${BORDER_COLOR};
        &:last-child {
          border-right: 0;
        }
      `;
    }
  }}
`;

const TableRowData = styled.tr<{ divider: DividerType }>`
  display: flex;
  border-color: rgba(0, 0, 0, 0.12);
  ${({ divider }) => {
    if (divider === "clean") return;
    if (divider === "horizontal")
      return css`
        border-bottom: 1px solid ${BORDER_COLOR};
        &:last-child {
          border-bottom: 0;
        }
      `;
    if (divider === "vertical") return;
    if (divider === "grid") {
      return css`
        border-bottom: 1px solid ${BORDER_COLOR};
        &:last-child {
          border-bottom: 0;
        }
      `;
    }
  }}
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
  &:hover {
    background-color: #f3f3f3;
  }
`;

const TableData = styled.td<{ size: number; divider: DividerType }>`
  flex: 1;
  text-align: left;
  padding: ${({ size }) => `${size}px`};
  border-color: rgba(0, 0, 0, 0.12);
  ${({ divider }) => {
    if (divider === "clean") return;
    if (divider === "horizontal") return;
    if (divider === "vertical") {
      return css`
        border-right: 1px solid ${BORDER_COLOR};
        &:last-child {
          border-right: 0;
        }
      `;
    }
    if (divider === "grid") {
      return css`
        border-right: 1px solid ${BORDER_COLOR};
        &:last-child {
          border-right: 0;
        }
      `;
    }
  }}
`;
