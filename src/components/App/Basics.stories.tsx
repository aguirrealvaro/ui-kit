import styled from "styled-components";
import { useTheme } from "@/hooks";
export default {
  title: "Theme/Basics",
};

export const Primary = () => {
  const { theme } = useTheme();

  const basics = [
    {
      bg: theme.assets.bgPrimary,
      border: theme.assets.borderPrimary,
      hover: theme.assets.hoverPrimary,
    },
    {
      bg: theme.assets.bgSecondary,
      border: theme.assets.borderSecondary,
      hover: theme.assets.hoverSecondary,
    },
    {
      bg: theme.assets.bgTertiary,
      border: theme.assets.borderTertiary,
      hover: theme.assets.hoverTertiary,
    },
  ];

  return (
    <Container>
      {basics.map((basic, index) => {
        return (
          <Inner key={index}>
            <Card bg={basic.bg}>
              <Item border={basic.border} hover={basic.hover}>
                Item
              </Item>
              <Item border={basic.border} hover={basic.hover}>
                Item
              </Item>
              <Item border={basic.border} hover={basic.hover}>
                Item
              </Item>
            </Card>
          </Inner>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.assets.primary};
  padding: 3rem;
  display: flex;
  gap: 1rem;
`;

const Inner = styled.div`
  padding: 2rem;
`;

const Card = styled.div<{ bg: string }>`
  background-color: ${({ bg }) => bg};
  padding: 2rem;
`;

const Item = styled.div<{ border: string; hover: string }>`
  border-bottom: 1px solid ${({ border }) => border};
  padding: 1rem;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${({ hover }) => hover};
  }
`;
