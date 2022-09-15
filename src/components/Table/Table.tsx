import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type TableProps = {
  columns: ReactNode[];
  data: ReactNode[][];
};

export const Table: FunctionComponent<TableProps> = ({ columns, data }) => {
  return (
    <Container>
      <thead>
        <TableRow>
          {columns.map((column) => {
            return <TableHead>{column}</TableHead>;
          })}
        </TableRow>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <TableRow>
              {row.map((rowData) => {
                return <TableData>{rowData}</TableData>;
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

const TableHead = styled.th`
  flex: 1;
  text-align: left;
  border-right: 1px solid;
  padding: 1rem;
  &:last-child {
    border-right: 0;
  }
`;

const TableData = styled.td`
  flex: 1;
  text-align: left;
  border-right: 1px solid;
  padding: 1rem;
  &:last-child {
    border-right: 0;
  }
`;
