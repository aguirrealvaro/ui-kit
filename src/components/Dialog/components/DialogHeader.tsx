import styled from "styled-components";

export const DialogHeader = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.tokens.border};
`;
