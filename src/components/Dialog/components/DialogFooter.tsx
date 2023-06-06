import styled from "styled-components";

export const DialogFooter = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.tokens.border};
`;
