import { FunctionComponent } from "react";
import styled from "styled-components";
import { Button } from "..";
import { useTheme } from "../../hooks";

export const ColorMode: FunctionComponent = () => {
  const { themeMode, toggleThemeMode } = useTheme();

  return (
    <Container>
      <div>color mode: {themeMode}</div>
      <Button onClick={toggleThemeMode}>Toggle color!</Button>
    </Container>
  );
};

const Container = styled.div`
  color: ${({ theme }) => theme.assets.textPrimary};
`;
