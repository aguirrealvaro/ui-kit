import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { NavbarNew } from "../NavbarNew";
import { GlobalStyles } from "@/css";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <NavbarNew>Header</NavbarNew>
      <Main>{children}</Main>
      <footer>Footer</footer>
      <GlobalStyles />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Main = styled.main`
  flex: 1;
`;
