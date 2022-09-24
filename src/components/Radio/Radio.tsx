import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
import { RadioCircle } from "@styled-icons/boxicons-regular/RadioCircle";
import { RadioCircleMarked } from "@styled-icons/boxicons-regular/RadioCircleMarked";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { RADIO_SIZES } from "./Radio.constants";
import { RadioPositionType, RadioSizeType } from "./Radio.types";
import { hiddenStyles } from "@/css";
import { useTheme } from "@/hooks";

type RadioProps = {
  children?: ReactNode;
  size?: RadioSizeType;
  position?: RadioPositionType;
  color?: string;
  disabled?: boolean;
};

export const Radio: FunctionComponent<
  RadioProps & Omit<InputHTMLAttributes<HTMLInputElement>, "size">
> = ({
  children,
  size = "md",
  position = "right",
  checked,
  color,
  disabled = false,
  ...restProps
}) => {
  const { theme } = useTheme();

  const radioSize = RADIO_SIZES[size];

  const icon = checked ? RadioCircleMarked : RadioCircle;
  const iconColor = color || theme.colors.brand;

  return (
    <label>
      <HiddenInput type="radio" checked={checked} disabled={disabled} {...restProps} />
      <Container disabled={disabled}>
        <Wrapper position={position}>
          <Icon
            icon={icon}
            color={disabled ? theme.colors.grey[5] : iconColor}
            size={radioSize}
          />
        </Wrapper>
        {children && (
          <Label position={position} size={size}>
            {children}
          </Label>
        )}
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
  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
        color: ${theme.assets.disabled};
      `;
    }
  }}
`;

const Wrapper = styled.div<{ position: RadioPositionType }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
`;

const Label = styled.div<{ position: RadioPositionType; size: RadioSizeType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
  font-size: ${({ size, theme }) => {
    const sizes: Record<RadioSizeType, string> = {
      xs: theme.typography.fontSizes.xs,
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[size];
  }};
`;
