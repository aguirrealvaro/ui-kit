import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type ToggleProps = {
  children: ReactNode;
  isChecked: boolean;
  onToggle: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Toggle: FunctionComponent<ToggleProps> = ({ children, isChecked, onToggle }) => {
  return (
    <ToggleButton aria-pressed={isChecked} onClick={onToggle} isChecked={isChecked}>
      {children}
    </ToggleButton>
  );
};

const ToggleButton = styled.button<{ isChecked: boolean }>`
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid
    ${({ theme, isChecked }) => (isChecked ? theme.assets.primary : theme.assets.border)};
  color: ${({ theme, isChecked }) =>
    isChecked ? theme.assets.primary : theme.assets.textPrimary};
`;
