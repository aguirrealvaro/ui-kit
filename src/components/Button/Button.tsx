import { FunctionComponent, ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { Spinner } from "../Spinner";
import {
  ButtonKindType,
  ButtonSizeType,
  ButtonVariantType,
  ButtonShapeType,
} from "./Button.types";
import { ThemeType } from "@/css";
import { useTheme } from "@/hooks";

type ButtonProps = {
  block?: boolean;
  isLoading?: boolean;
  kind?: ButtonKindType;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  shape?: ButtonShapeType;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export const Button: FunctionComponent<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  onClick,
  block,
  isLoading,
  kind = "solid",
  size = "md",
  variant = "default",
  shape = "default",
  leftIcon,
  rightIcon,
  ...restProps
}) => {
  const { theme } = useTheme();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading) return;
    onClick?.(e);
  };

  const renderChildren = () => {
    if (isLoading) return <Spinner size="xs" color={theme.colors.grey[10]} />;

    return (
      <InnerContainer>
        {leftIcon ? leftIcon : null}
        <div>{children}</div>
        {rightIcon ? rightIcon : null}
      </InnerContainer>
    );
  };

  return (
    <CustomButton
      block={block}
      kind={kind}
      size={size}
      variant={variant}
      onClick={handleOnClick}
      shape={shape}
      {...restProps}
    >
      {renderChildren()}
    </CustomButton>
  );
};

const getSizeStyles = (size: ButtonSizeType, theme: ThemeType): FlattenSimpleInterpolation => {
  const sizeOptions: Record<ButtonSizeType, FlattenSimpleInterpolation> = {
    xs: css`
      height: 24px;
      padding: 0rem 8px;
      font-size: ${theme.typography.fontSizes.xs};
    `,
    sm: css`
      height: 32px;
      padding: 0 12px;
      font-size: ${theme.typography.fontSizes.sm};
    `,
    md: css`
      height: 40px;
      padding: 0 16px;
      font-size: ${theme.typography.fontSizes.md};
    `,
    lg: css`
      height: 48px;
      padding: 0 20px;
      font-size: ${theme.typography.fontSizes.lg};
    `,
  };

  return sizeOptions[size];
};

const getShapeStyles = (
  shape: ButtonShapeType,
  theme: ThemeType
): FlattenSimpleInterpolation => {
  const shapeOptions: Record<ButtonShapeType, FlattenSimpleInterpolation> = {
    default: css`
      border-radius: ${theme.borderRadius.sm};
    `,
    pill: css`
      border-radius: ${theme.borderRadius.xl};
    `,
    rectangle: css`
      border-radius: ${theme.borderRadius.none};
    `,
  };

  return shapeOptions[shape];
};

const getColorStyles = (
  variant: ButtonVariantType,
  kind: ButtonKindType,
  theme: ThemeType
): FlattenSimpleInterpolation => {
  const solidStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    default: css`
      background-color: ${theme.assets.brand};
      color: ${theme.colors.grey[1]};
      border-color: ${theme.assets.brand};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.blue[5]};
        border-color: ${theme.colors.blue[5]};
      }
    `,
    positive: css`
      background-color: ${theme.colors.green.base};
      color: ${theme.colors.grey[1]};
      border-color: ${theme.colors.green.base};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.green[5]};
        border-color: ${theme.colors.green[5]};
      }
    `,
    warning: css`
      background-color: ${theme.colors.yellow.base};
      color: ${theme.colors.grey[1]};
      border-color: ${theme.colors.yellow.base};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.yellow[4]};
        border-color: ${theme.colors.yellow[4]};
      }
    `,
    negative: css`
      background-color: ${theme.colors.red.base};
      color: ${theme.colors.grey[1]};
      border-color: ${theme.colors.red.base};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.red[6]};
        border-color: ${theme.colors.red[6]};
      }
    `,
    neutral: css`
      background-color: ${theme.colors.grey[10]};
      color: ${theme.colors.grey[1]};
      border-color: ${theme.colors.grey[10]};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[9]};
        border-color: ${theme.colors.grey[9]};
      }
    `,
  };

  const outlinedHover = theme.colors.grey[3];

  const outlinedStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    default: css`
      color: ${theme.assets.brand};
      border-color: ${theme.assets.brand};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${outlinedHover};
      }
    `,
    positive: css`
      color: ${theme.colors.green.base};
      border-color: ${theme.colors.green.base};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${outlinedHover};
      }
    `,
    warning: css`
      color: ${theme.colors.yellow.base};
      border-color: ${theme.colors.yellow.base};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${outlinedHover};
      }
    `,
    negative: css`
      color: ${theme.colors.red.base};
      border-color: ${theme.colors.red.base};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${outlinedHover};
      }
    `,
    neutral: css`
      color: ${theme.colors.grey[10]};
      border-color: ${theme.colors.grey[10]};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${outlinedHover};
      }
    `,
  };

  const ghostStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    default: css`
      color: ${theme.assets.brand};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.blue[2]};
      }
    `,
    positive: css`
      color: ${theme.colors.green.base};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.green[2]};
      }
    `,
    warning: css`
      color: ${theme.colors.yellow.base};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.yellow[2]};
      }
    `,
    negative: css`
      color: ${theme.colors.red.base};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.red[2]};
      }
    `,
    neutral: css`
      color: ${theme.colors.grey[10]};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[3]};
      }
    `,
  };

  const linkStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    default: css`
      color: ${theme.assets.brand};
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    positive: css`
      color: ${theme.colors.green.base};
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    warning: css`
      color: ${theme.colors.yellow.base};
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    negative: css`
      color: ${theme.colors.red.base};
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    neutral: css`
      color: ${theme.colors.grey[10]};
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
  };

  const alernativeStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    default: css`
      border-color: ${theme.colors.grey[4]};
      color: ${theme.colors.grey[6]};
      &:hover:not([disabled]) {
        color: ${theme.assets.brand};
        border-color: ${theme.assets.brand};
      }
    `,
    positive: css`
      border-color: ${theme.colors.grey[4]};
      color: ${theme.colors.grey[6]};
      &:hover:not([disabled]) {
        color: ${theme.colors.green.base};
        border-color: ${theme.colors.green.base};
      }
    `,
    warning: css`
      border-color: ${theme.colors.grey[4]};
      color: ${theme.colors.grey[6]};
      &:hover:not([disabled]) {
        color: ${theme.colors.yellow.base};
        border-color: ${theme.colors.yellow.base};
      }
    `,
    negative: css`
      border-color: ${theme.colors.grey[4]};
      color: ${theme.colors.grey[6]};
      &:hover:not([disabled]) {
        color: ${theme.colors.red.base};
        border-color: ${theme.colors.red.base};
      }
    `,
    neutral: css`
      border-color: ${theme.colors.grey[4]};
      color: ${theme.colors.grey[6]};
      &:hover:not([disabled]) {
        color: ${theme.colors.grey[10]};
        border-color: ${theme.colors.grey[10]};
      }
    `,
  };

  const colorOptions: Record<ButtonKindType, FlattenSimpleInterpolation> = {
    solid: solidStyles[variant],
    outlined: outlinedStyles[variant],
    ghost: ghostStyles[variant],
    link: linkStyles[variant],
    alternative: alernativeStyles[variant],
  };

  return colorOptions[kind];
};

const CustomButton = styled.button<{
  block?: boolean;
  kind: ButtonKindType;
  size: ButtonSizeType;
  variant: ButtonVariantType;
  shape: ButtonShapeType;
}>`
  width: ${({ block }) => (block ? "100%" : "auto")};
  border: 1px solid transparent;
  ${({ size, theme }) => getSizeStyles(size, theme)};
  ${({ shape, theme }) => getShapeStyles(shape, theme)};
  ${({ variant, kind, theme }) => getColorStyles(variant, kind, theme)};
  transition: all ${({ theme }) => theme.transitions.normal}ms ease;
  &:disabled {
    background: ${({ theme }) => theme.assets["disabled"]};
    border-color: transparent;
    cursor: not-allowed;
    color: ${({ theme }) => theme.assets["disabled-font"]};
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
