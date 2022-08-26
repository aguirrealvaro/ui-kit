import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <header>Header</header>
      <Main>{children}</Main>
      <footer>Footer</footer>
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
