import styled from "styled-components";
import { theme } from "@/css";

export default {
  title: "Theme/Shadows",
};

export const Primary = () => {
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
  grid-gap: ${({ theme }) => theme.spacing[8]};
`;

const Title = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
`;

const ShadowBox = styled.div<{ shadow: string }>`
  width: 200px;
  height: 200px;
  box-shadow: ${({ shadow }) => shadow};
`;
