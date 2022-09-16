import { FunctionComponent, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
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
  min-width: 600px;
  width: 100%;
  //overflow-x: scroll;
  border-spacing: 0;
  border-color: rgba(0, 0, 0, 0.12);
  ${({ divider }) => {
    const dividerStyles: Record<DividerType, FlattenSimpleInterpolation | undefined> = {
      clean: undefined,
      horizontal: undefined,
      vertical: undefined,
      grid: css`
        border: 1px solid ${BORDER_COLOR};
      `,
    };
    return dividerStyles[divider];
  }};
`;

const TableRowHeader = styled.tr<{ divider: DividerType }>`
  display: flex;
  border-color: rgba(0, 0, 0, 0.12);
  ${({ divider }) => {
    const dividerStyles: Record<DividerType, FlattenSimpleInterpolation | undefined> = {
      clean: undefined,
      horizontal: css`
        border-bottom: 1px solid ${BORDER_COLOR};
      `,
      vertical: css`
        border-bottom: 1px solid ${BORDER_COLOR};
      `,
      grid: css`
        border-bottom: 1px solid ${BORDER_COLOR};
      `,
    };
    return dividerStyles[divider];
  }}
`;

const TableHead = styled.th<{ size: number; divider: DividerType }>`
  flex: 1;
  text-align: left;
  padding: ${({ size }) => `${size}px`};
  border-color: rgba(0, 0, 0, 0.12);
  ${({ divider }) => {
    const dividerStyles: Record<DividerType, FlattenSimpleInterpolation | undefined> = {
      clean: undefined,
      horizontal: undefined,
      vertical: css`
        border-right: 1px solid ${BORDER_COLOR};
        &:last-child {
          border-right: 0;
        }
      `,
      grid: css`
        border-right: 1px solid ${BORDER_COLOR};
        &:last-child {
          border-right: 0;
        }
      `,
    };
    return dividerStyles[divider];
  }}
`;

const TableRowData = styled.tr<{ divider: DividerType }>`
  display: flex;
  border-color: rgba(0, 0, 0, 0.12);
  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.04);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  ${({ divider }) => {
    const dividerStyles: Record<DividerType, FlattenSimpleInterpolation | undefined> = {
      clean: undefined,
      horizontal: css`
        border-bottom: 1px solid ${BORDER_COLOR};
        &:last-child {
          border-bottom: 0;
        }
      `,
      vertical: undefined,
      grid: css`
        border-bottom: 1px solid ${BORDER_COLOR};
        &:last-child {
          border-bottom: 0;
        }
      `,
    };
    return dividerStyles[divider];
  }}
`;

const TableData = styled.td<{ size: number; divider: DividerType }>`
  flex: 1;
  text-align: left;
  padding: ${({ size }) => `${size}px`};
  border-color: rgba(0, 0, 0, 0.12);
  ${({ divider }) => {
    const dividerStyles: Record<DividerType, FlattenSimpleInterpolation | undefined> = {
      clean: undefined,
      horizontal: undefined,
      vertical: css`
        border-right: 1px solid ${BORDER_COLOR};
        &:last-child {
          border-right: 0;
        }
      `,
      grid: css`
        border-right: 1px solid ${BORDER_COLOR};
        &:last-child {
          border-right: 0;
        }
      `,
    };
    return dividerStyles[divider];
  }}
`;
