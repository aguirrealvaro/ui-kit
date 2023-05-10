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
  display: flex;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid
    ${({ theme, isChecked }) => (isChecked ? theme.colors.grey.default : theme.assets.border)};
  color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.grey.default : theme.assets.textPrimary};
`;
