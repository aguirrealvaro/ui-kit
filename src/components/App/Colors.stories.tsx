import styled from "styled-components";
import { theme } from "@/css";

export default {
  title: "Theme/Colors",
};

export const Primary = () => {
  return (
    <Container>
      {Object.entries(theme.colors).map(([palette, colors], index) => {
        if (palette === "black" || palette === "white") return;

        return (
          <div key={index}>
            <Title>{palette}</Title>
            <div>
              {Object.entries(colors).map(([variant, color], index) => {
                return (
                  <Color color={color} key={index}>
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
  grid-gap: ${({ theme }) => theme.spacing[8]};
`;

const Title = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
`;

const Color = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 1rem;
`;
