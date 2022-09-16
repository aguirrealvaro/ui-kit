import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
import { Checkbox as CheckboxUnchecked } from "@styled-icons/boxicons-regular/Checkbox";
import { CheckboxChecked } from "@styled-icons/boxicons-solid/CheckboxChecked";
import styled, { css } from "styled-components";
import { hiddenStyles, theme } from "../App";
import { Icon } from "../Icon";
import { SIZES } from "./Checkbox.constants";
import { PositionType, SizeType } from "./Checkbox.types";

type CheckboxProps = {
  children?: ReactNode;
  checkboxSize?: SizeType;
  position?: PositionType;
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
      <Container>
        <Wrapper position={position} disabled={disabled}>
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

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Wrapper = styled.div<{ position: PositionType; disabled: boolean }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
  ${({ disabled }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
      `;
    }
  }}
`;

const Label = styled.div<{ position: PositionType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
`;
