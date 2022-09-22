import styled from "styled-components";
import { theme } from "./theme";

export default {
  title: "Theme/Colors",
};

export const Primary = () => {
  return (
    <Container>
      {Object.entries(theme.palette).map(([palette, colors]) => {
        return (
          <Palette>
            <Title>{palette}</Title>
            <div>
              {Object.entries(colors).map(([variant, color]) => {
                return (
                  <Color color={color}>
                    {variant} - {color}
                  </Color>
                );
              })}
            </div>
          </Palette>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.2rem;
`;

const Palette = styled.div`
  width: 30%;
`;

const Color = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
`;
