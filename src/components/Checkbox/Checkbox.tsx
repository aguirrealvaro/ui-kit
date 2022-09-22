import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
import { Checkbox as CheckboxUnchecked } from "@styled-icons/boxicons-regular/Checkbox";
import { CheckboxChecked } from "@styled-icons/boxicons-solid/CheckboxChecked";
import styled, { css } from "styled-components";
import { hiddenStyles } from "../App";
import { Icon } from "../Icon";
import { CHECKBOX_SIZES } from "./Checkbox.constants";
import { CheckboxPositionType, CheckboxSizeType } from "./Checkbox.types";
import { useTheme } from "@/hooks";

type CheckboxProps = {
  children?: ReactNode;
  size?: CheckboxSizeType;
  position?: CheckboxPositionType;
  color?: string;
  disabled?: boolean;
};

export const Checkbox: FunctionComponent<
  CheckboxProps & Omit<InputHTMLAttributes<HTMLInputElement>, "size">
> = ({
  children,
  size = "sm",
  position = "right",
  checked,
  color,
  disabled = false,
  ...restProps
}) => {
  const { theme } = useTheme();

  const checkboxSize1 = CHECKBOX_SIZES[size];

  const icon = checked ? CheckboxChecked : CheckboxUnchecked;

  const iconColor = color || theme.colors.blue;

  return (
    <label>
      <HiddenInput type="checkbox" checked={checked} {...restProps} disabled={disabled} />
      <Container disabled={disabled}>
        <Wrapper position={position}>
          <Icon icon={icon} color={disabled ? "#cecece" : iconColor} size={checkboxSize1} />
        </Wrapper>
        {children && <Label position={position}>{children}</Label>}
      </Container>
    </label>
  );
};

const HiddenInput = styled.input`
  ${hiddenStyles};
`;

const Container = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${({ disabled }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
        color: #cecece;
      `;
    }
  }}
`;

const Wrapper = styled.div<{ position: CheckboxPositionType }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
`;

const Label = styled.div<{ position: CheckboxPositionType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
`;
