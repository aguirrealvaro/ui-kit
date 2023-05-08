import { FunctionComponent } from "react";
import styled from "styled-components";

export const MobileMenu: FunctionComponent = () => {
  return <Container>MobileMenu</Container>;
};

const Container = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndices.selectDropdown};
`;
