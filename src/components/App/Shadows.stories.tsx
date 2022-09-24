import styled from "styled-components";
import { useTheme } from "@/hooks";
export default {
  title: "Theme/Shadows",
};

export const Primary = () => {
  const { theme } = useTheme();

  return (
    <Container>
      {Object.entries(theme.shadows).map(([size, shadow], index) => {
        return (
          <div key={index}>
            <Title>{size}</Title>
            <ShadowBox shadow={shadow}></ShadowBox>
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
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
`;

const ShadowBox = styled.div<{ shadow: string }>`
  width: 200px;
  height: 200px;
  box-shadow: ${({ shadow }) => shadow};
`;
