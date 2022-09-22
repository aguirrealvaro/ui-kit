import styled from "styled-components";
import { theme } from "./theme";

export default {
  title: "Theme/Colors",
};

export const Primary = () => {
  return (
    <Container>
      {Object.entries(theme.palette).map(([palette, colors]) => {
        if (palette === "brand") null;

        return (
          <div>
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
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.2rem;
`;

const Color = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 1rem;
`;
