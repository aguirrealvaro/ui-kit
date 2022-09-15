import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { PADDINGS_SIZES } from "./Table.constants";
import { SizeType } from "./Table.types";

type TableProps = {
  columns: ReactNode[];
  data: ReactNode[][];
  size?: SizeType;
};

export const Table: FunctionComponent<TableProps> = ({ columns, data, size = "md" }) => {
  const padding = PADDINGS_SIZES[size];

  return (
    <Container>
      <thead>
        <TableRow>
          {columns.map((column) => {
            return <TableHead size={padding}>{column}</TableHead>;
          })}
        </TableRow>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <TableRow>
              {row.map((rowData) => {
                return <TableData size={padding}>{rowData}</TableData>;
              })}
            </TableRow>
          );
        })}
      </tbody>
    </Container>
  );
};

const Container = styled.table`
  min-width: 100%;
  border: 1px solid;
  border-spacing: 0;
`;

const TableRow = styled.tr`
  display: flex;
  border-bottom: 1px solid;
  &:last-child {
    border-bottom: 0;
  }
  &:first-child {
    border-bottom: 1px solid;
  }
`;

const TableHead = styled.th<{ size: number }>`
  flex: 1;
  text-align: left;
  border-right: 1px solid;
  padding: ${({ size }) => `${size}px`};
  &:last-child {
    border-right: 0;
  }
`;

const TableData = styled.td<{ size: number }>`
  flex: 1;
  text-align: left;
  border-right: 1px solid;
  padding: ${({ size }) => `${size}px`};
  &:last-child {
    border-right: 0;
  }
`;
