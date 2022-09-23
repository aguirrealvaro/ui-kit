import { FunctionComponent } from "react";
import styled from "styled-components";

export const Logo: FunctionComponent = () => <Container>LOGO</Container>;

const Container = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  letter-spacing: 7px;
  text-transform: uppercase;
`;
