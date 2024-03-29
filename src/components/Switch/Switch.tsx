import { ButtonHTMLAttributes, FunctionComponent, ReactNode, useId } from "react";
import styled, { css } from "styled-components";
import { SwitchPositionType, SwitchSizeType } from "./Switch.types";
import { HelpMessage, ThemeType, theme } from "@/css";

type SwitchProps = {
  children: ReactNode;
  checked: boolean;
  onChange: () => void;
  color?: string;
  size?: SwitchSizeType;
  helpMessage?: ReactNode;
  position?: SwitchPositionType;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "id" | "onChange">;

const Switch: FunctionComponent<SwitchProps> = ({
  children,
  checked,
  onChange,
  disabled = false,
  color,
  size = "md",
  helpMessage,
  position = "left",
  ...restProps
}) => {
  const id = useId();
  const labelId = `${id}-label`;

  return (
    <Container $position={position}>
      <SwitchButton
        type="button"
        role="switch"
        onClick={onChange}
        aria-checked={checked}
        id={id}
        aria-labelledby={labelId}
        disabled={disabled}
        $position={position}
        {...restProps}
      >
        <Wrapper $position={position}>
          <Pill
            $checked={checked || false}
            $size={size}
            $color={color || theme.colors.grey.default}
            $disabled={disabled}
          >
            <Ball $checked={checked || false} $size={size} />
          </Pill>
        </Wrapper>
      </SwitchButton>
      <LabelContainer id={labelId} htmlFor={id} $position={position}>
        <Children $size={size}>{children}</Children>
        {helpMessage && <HelpMessage size={size}>{helpMessage}</HelpMessage>}
      </LabelContainer>
    </Container>
  );
};

export { Switch, type SwitchProps };

const Container = styled.div<{ $position: SwitchPositionType }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  justify-content: ${({ $position }) =>
    $position === "left" ? "flex-start" : "space-between"};
`;

const SwitchButton = styled.button<{ $position: SwitchPositionType }>`
  order: ${({ $position }) => ($position === "left" ? 1 : 2)};
  &:disabled {
    cursor: not-allowed;
  }
`;

const Wrapper = styled.div<{ $position: SwitchPositionType }>`
  display: flex;
  order: ${({ $position }) => ($position === "left" ? 1 : 2)};
`;

const getSizes = (theme: ThemeType) => {
  const sizes: Record<SwitchSizeType, string> = {
    sm: theme.spacing[5],
    md: theme.spacing[6],
    lg: theme.spacing[7],
  };
  return sizes;
};

const Pill = styled.span<{
  $checked: boolean;
  $size: SwitchSizeType;
  $color: string;
  $disabled: boolean;
}>`
  display: inline-flex;
  cursor: pointer;
  position: relative;
  ${({ $size, theme }) => {
    const pillSize = getSizes(theme)[$size];

    return css`
      width: ${`calc(${pillSize} * 2)`};
      height: ${pillSize};
    `;
  }}
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: background-color ${({ theme }) => theme.transitions.durations.normal}ms
      ${({ theme }) => theme.transitions.timings.out},
    box-shadow ${({ theme }) => theme.transitions.durations.normal}ms
      ${({ theme }) => theme.transitions.timings.out};
  ${({ $checked, $color, theme }) => {
    if ($checked) {
      return css`
        background-color: ${$color};
        box-shadow: ${({ theme }) => theme.shadows.inner};
      `;
    } else {
      return css`
        background-color: ${theme.colors.grey[400]};
        box-shadow: ${({ theme }) => theme.shadows.inner};
      `;
    }
  }}
  ${({ $disabled, theme }) => {
    if ($disabled) {
      return css`
        cursor: not-allowed;
        background-color: ${theme.tokens.disabledPrimary};
        box-shadow: ${({ theme }) => theme.shadows.none};
      `;
    }
  }}
`;

const Ball = styled.span<{ $checked: boolean; $size: SwitchSizeType }>`
  position: absolute;
  top: 0;
  left: ${({ $checked, $size, theme }) => {
    const translate = getSizes(theme)[$size];
    return $checked ? `${translate}` : 0;
  }};
  transform: scale(0.8);
  background-color: ${({ theme }) => theme.colors.white};
  ${({ $size, theme }) => {
    const pillSize = getSizes(theme)[$size];
    return css`
      width: ${pillSize};
      height: ${pillSize};
    `;
  }};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: left ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.in};
`;

const LabelContainer = styled.label<{ $position: SwitchPositionType }>`
  order: ${({ $position }) => ($position === "left" ? 2 : 1)};
`;

const Children = styled.span<{ $size: SwitchSizeType }>`
  display: block;
  font-size: ${({ $size, theme }) => {
    const sizes: Record<SwitchSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[$size];
  }};
`;
