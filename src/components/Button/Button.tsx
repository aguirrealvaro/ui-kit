import { FunctionComponent, ButtonHTMLAttributes, ReactNode, MouseEvent } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { Spinner } from "../Spinner";
import { ButtonKindType, ButtonSizeType, ButtonShapeType } from "./Button.types";
import { ThemeType, theme } from "@/css";
import { VariantType } from "@/types";

type ButtonProps = {
  block?: boolean;
  isLoading?: boolean;
  kind?: ButtonKindType;
  size?: ButtonSizeType;
  variant?: VariantType;
  shape?: ButtonShapeType;
  startElement?: ReactNode;
  endElement?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  block,
  isLoading,
  kind = "solid",
  size = "md",
  variant = "primary",
  shape = "default",
  startElement,
  endElement,
  type = "button",
  ...restProps
}) => {
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isLoading) return;
    onClick?.(e);
  };

  const renderChildren = () => {
    if (isLoading) return <Spinner size="xs" color={theme.colors.grey[800]} />;

    return (
      <>
        {startElement ? startElement : null}
        {children}
        {endElement ? endElement : null}
      </>
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
      type={type}
      {...restProps}
    >
      {renderChildren()}
    </CustomButton>
  );
};

const getSizeStyles = (size: ButtonSizeType, theme: ThemeType): FlattenSimpleInterpolation => {
  const sizeOptions: Record<ButtonSizeType, FlattenSimpleInterpolation> = {
    xs: css`
      height: ${theme.sizes[6]};
      padding: 0 ${`${theme.spacing[2]}`};
      font-size: ${theme.typography.fontSizes.xs};
    `,
    sm: css`
      height: ${theme.sizes[8]};
      padding: 0 ${`${theme.spacing[3]}`};
      font-size: ${theme.typography.fontSizes.sm};
    `,
    md: css`
      height: ${theme.sizes[10]};
      padding: 0 ${`${theme.spacing[4]}`};
      font-size: ${theme.typography.fontSizes.md};
    `,
    lg: css`
      height: ${theme.sizes[12]};
      padding: 0 ${`${theme.spacing[5]}`};
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
      border-radius: ${theme.borderRadius.xs};
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
  variant: VariantType,
  kind: ButtonKindType,
  theme: ThemeType
): FlattenSimpleInterpolation => {
  const solidStyles: Record<VariantType, FlattenSimpleInterpolation> = {
    primary: css`
      background-color: ${theme.assets.primary};
      color: ${theme.colors.white};
      border-color: ${theme.assets.primary};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.blue[600]};
        border-color: ${theme.colors.blue[600]};
      }
    `,
    success: css`
      background-color: ${theme.assets.success};
      color: ${theme.colors.white};
      border-color: ${theme.assets.success};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.green[600]};
        border-color: ${theme.colors.green[600]};
      }
    `,
    warning: css`
      background-color: ${theme.assets.warning};
      color: ${theme.colors.white};
      border-color: ${theme.assets.warning};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.yellow[600]};
        border-color: ${theme.colors.yellow[600]};
      }
    `,
    danger: css`
      background-color: ${theme.assets.danger};
      color: ${theme.colors.white};
      border-color: ${theme.assets.danger};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.red[600]};
        border-color: ${theme.colors.red[600]};
      }
    `,
    neutral: css`
      background-color: ${theme.assets.neutral};
      color: ${theme.colors.white};
      border-color: ${theme.assets.neutral};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[900]};
        border-color: ${theme.colors.grey[900]};
      }
    `,
  };

  const outlinedStyles: Record<VariantType, FlattenSimpleInterpolation> = {
    primary: css`
      color: ${theme.assets.primary};
      border-color: ${theme.assets.primary};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[100]};
      }
    `,
    success: css`
      color: ${theme.assets.success};
      border-color: ${theme.assets.success};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[100]};
      }
    `,
    warning: css`
      color: ${theme.assets.warning};
      border-color: ${theme.assets.warning};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[100]};
      }
    `,
    danger: css`
      color: ${theme.assets.danger};
      border-color: ${theme.assets.danger};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[100]};
      }
    `,
    neutral: css`
      color: ${theme.assets.neutral};
      border-color: ${theme.assets.neutral};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[100]};
      }
    `,
  };

  const ghostStyles: Record<VariantType, FlattenSimpleInterpolation> = {
    primary: css`
      color: ${theme.assets.primary};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.blue[50]};
      }
    `,
    success: css`
      color: ${theme.assets.success};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.green[50]};
      }
    `,
    warning: css`
      color: ${theme.assets.warning};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.yellow[50]};
      }
    `,
    danger: css`
      color: ${theme.assets.danger};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.red[50]};
      }
    `,
    neutral: css`
      color: ${theme.assets.neutral};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[100]};
      }
    `,
  };

  const linkStyles: Record<VariantType, FlattenSimpleInterpolation> = {
    primary: css`
      color: ${theme.assets.primary};
      background-color: transparent;
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    success: css`
      color: ${theme.assets.success};
      background-color: transparent;
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    warning: css`
      color: ${theme.assets.warning};
      background-color: transparent;
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    danger: css`
      color: ${theme.assets.danger};
      background-color: transparent;
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    neutral: css`
      color: ${theme.assets.neutral};
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
  };

  const alernativeStyles: Record<VariantType, FlattenSimpleInterpolation> = {
    primary: css`
      border-color: ${theme.colors.grey[200]};
      color: ${theme.colors.grey[600]};
      background-color: transparent;
      &:hover:not([disabled]) {
        color: ${theme.assets.primary};
        border-color: ${theme.assets.primary};
      }
    `,
    success: css`
      border-color: ${theme.colors.grey[200]};
      color: ${theme.colors.grey[600]};
      background-color: transparent;
      &:hover:not([disabled]) {
        color: ${theme.assets.success};
        border-color: ${theme.assets.success};
      }
    `,
    warning: css`
      border-color: ${theme.colors.grey[200]};
      color: ${theme.colors.grey[600]};
      background-color: transparent;
      &:hover:not([disabled]) {
        color: ${theme.assets.warning};
        border-color: ${theme.assets.warning};
      }
    `,
    danger: css`
      border-color: ${theme.colors.grey[200]};
      color: ${theme.colors.grey[600]};
      background-color: transparent;
      &:hover:not([disabled]) {
        color: ${theme.assets.danger};
        border-color: ${theme.assets.danger};
      }
    `,
    neutral: css`
      border-color: ${theme.colors.grey[200]};
      color: ${theme.colors.grey[600]};
      background-color: transparent;
      &:hover:not([disabled]) {
        color: ${theme.assets.neutral};
        border-color: ${theme.assets.neutral};
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
  variant: VariantType;
  shape: ButtonShapeType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: ${({ block }) => (block ? "100%" : "auto")};
  border: 1px solid transparent;
  ${({ size, theme }) => getSizeStyles(size, theme)};
  ${({ shape, theme }) => getShapeStyles(shape, theme)};
  ${({ variant, kind, theme }) => getColorStyles(variant, kind, theme)};
  transition: all ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.out};
  &:disabled {
    background-color: ${({ theme }) => theme.assets.disabledPrimary};
    border-color: transparent;
    cursor: not-allowed;
    color: ${({ theme }) => theme.assets.disabledSecondary};
  }
`;
