import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type VariantType = "default" | "positive" | "negative" | "warning" | "neutral";

type AlertProps = {
  children: ReactNode;
  variant?: VariantType;
};

export const Alert: FunctionComponent<AlertProps> = ({ children, variant = "default" }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  padding: 1rem;
  background-color: blue;
  color: white;
  border-radius: 8px;
`;
