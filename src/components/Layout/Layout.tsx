import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { Navbar } from "@/components";
import { GlobalStyles } from "@/css";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Main>{children}</Main>
      <footer>Footer</footer>
      <GlobalStyles />
    </Container>
  );
};

export { Layout, type LayoutProps };

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Main = styled.main`
  flex: 1;
`;
