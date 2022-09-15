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
`;

const TableRow = styled.tr`
  display: flex;
  padding: 1rem 0;
  gap: 1rem;
`;

const TableHead = styled.th`
  flex: 1;
  text-align: left;
`;

const TableData = styled.td`
  flex: 1;
  text-align: left;
`;
