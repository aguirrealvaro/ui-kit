import styled from "styled-components";
import { theme } from "@/css";
export default {
  title: "Theme/Basics",
};

export const Primary = () => {
  const basics = [
    {
      bg: theme.tokens.bgPrimary,
      border: theme.tokens.border,
    },
    {
      bg: theme.tokens.bgSecondary,
      border: theme.tokens.border,
    },
  ];

  return (
    <Container>
      {basics.map((basic, index) => {
        return (
          <Inner key={index}>
            <Card bg={basic.bg}>
              <Item border={basic.border}>Item</Item>
              <Item border={basic.border}>Item</Item>
              <Item border={basic.border}>Item</Item>
            </Card>
          </Inner>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.blue.default};
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

const Item = styled.div<{ border: string }>`
  border-bottom: 1px solid ${({ border }) => border};
  padding: 1rem;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.tokens.hover};
  }
`;
