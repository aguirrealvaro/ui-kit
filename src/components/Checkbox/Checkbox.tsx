import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
import { Checkbox as CheckboxUnchecked } from "@styled-icons/boxicons-regular/Checkbox";
import { CheckboxChecked } from "@styled-icons/boxicons-solid/CheckboxChecked";
import styled, { css } from "styled-components";
import { hiddenStyles, theme } from "../App";
import { Icon } from "../Icon";
import { SIZES } from "./Checkbox.constants";
import { CheckboxPositionType, CheckboxSizeType } from "./Checkbox.types";

type CheckboxProps = {
  children?: ReactNode;
  checkboxSize?: CheckboxSizeType;
  position?: CheckboxPositionType;
  color?: string;
  disabled?: boolean;
};

export const Checkbox: FunctionComponent<
  CheckboxProps & InputHTMLAttributes<HTMLInputElement>
> = ({
  children,
  checkboxSize = "sm",
  position = "right",
  checked,
  color = theme.colors.blue,
  disabled = false,
  ...restProps
}) => {
  const size = SIZES[checkboxSize];

  const icon = checked ? CheckboxChecked : CheckboxUnchecked;

  return (
    <label>
      <HiddenInput type="checkbox" checked={checked} {...restProps} disabled={disabled} />
      <Container disabled={disabled}>
        <Wrapper position={position}>
          <Icon icon={icon} color={disabled ? "#cecece" : color} size={size} />
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
