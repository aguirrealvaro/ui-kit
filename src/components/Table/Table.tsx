import { FunctionComponent } from "react";
import styled from "styled-components";

export const Table: FunctionComponent = () => {
  return (
    <Container>
      <thead>
        <TableRow>
          <TableHead>Header 1</TableHead>
          <TableHead>Header 2</TableHead>
          <TableHead>Header 3</TableHead>
          <TableHead>Header 4</TableHead>
          <TableHead>Header 5</TableHead>
          <TableHead>Header 6</TableHead>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableData>data</TableData>
          <TableData>data</TableData>
          <TableData>data</TableData>
          <TableData>data</TableData>
          <TableData>data</TableData>
          <TableData>data</TableData>
        </TableRow>
        <TableRow>
          <TableData>data</TableData>
          <TableData>data</TableData>
          <TableData>data</TableData>
          <TableData>data</TableData>
          <TableData>data</TableData>
          <TableData>data</TableData>
        </TableRow>
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
