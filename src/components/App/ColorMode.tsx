import { FunctionComponent } from "react";
import styled from "styled-components";
import { Button } from "..";
import { useTheme } from "../../hooks";

export const ColorMode: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useTheme();

  return (
    <Container>
      <div>color mode: {colorMode}</div>
      <Button onClick={toggleColorMode}>Toggle color!</Button>
    </Container>
  );
};

const Container = styled.div`
  color: ${({ theme }) => theme.palette.grey[10]};
`;
