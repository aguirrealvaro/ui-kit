import { FunctionComponent } from "react";
import styled from "styled-components";

export const Logo: FunctionComponent = () => <Container>LOGO</Container>;

const Container = styled.div`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  letter-spacing: 7px;
  text-transform: uppercase;
`;
