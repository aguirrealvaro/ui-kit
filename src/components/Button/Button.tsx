import { FunctionComponent, ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { Spinner } from "../Spinner";
import { ButtonKindType, ButtonSizeType, ButtonShapeType } from "./Button.types";
import { ThemeType } from "@/css";
import { useTheme } from "@/hooks";
import { VariantType } from "@/types";

type ButtonProps = {
  block?: boolean;
  isLoading?: boolean;
  kind?: ButtonKindType;
  size?: ButtonSizeType;
  variant?: VariantType;
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
  variant = "primary",
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
      color: ${theme.colors.grey[1]};
      border-color: ${theme.assets.primary};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.blue[5]};
        border-color: ${theme.colors.blue[5]};
      }
    `,
    success: css`
      background-color: ${theme.assets.success};
      color: ${theme.colors.grey[1]};
      border-color: ${theme.assets.success};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.green[5]};
        border-color: ${theme.colors.green[5]};
      }
    `,
    warning: css`
      background-color: ${theme.assets.warning};
      color: ${theme.colors.grey[1]};
      border-color: ${theme.assets.warning};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.yellow[4]};
        border-color: ${theme.colors.yellow[4]};
      }
    `,
    danger: css`
      background-color: ${theme.assets.danger};
      color: ${theme.colors.grey[1]};
      border-color: ${theme.assets.danger};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.red[5]};
        border-color: ${theme.colors.red[5]};
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

  const outlinedStyles: Record<VariantType, FlattenSimpleInterpolation> = {
    primary: css`
      color: ${theme.assets.primary};
      border-color: ${theme.assets.primary};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${outlinedHover};
      }
    `,
    success: css`
      color: ${theme.assets.success};
      border-color: ${theme.assets.success};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${outlinedHover};
      }
    `,
    warning: css`
      color: ${theme.assets.warning};
      border-color: ${theme.assets.warning};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${outlinedHover};
      }
    `,
    danger: css`
      color: ${theme.assets.danger};
      border-color: ${theme.assets.danger};
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

  const ghostStyles: Record<VariantType, FlattenSimpleInterpolation> = {
    primary: css`
      color: ${theme.assets.primary};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.blue[2]};
      }
    `,
    success: css`
      color: ${theme.assets.success};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.green[2]};
      }
    `,
    warning: css`
      color: ${theme.assets.warning};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.yellow[2]};
      }
    `,
    danger: css`
      color: ${theme.assets.danger};
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

  const linkStyles: Record<VariantType, FlattenSimpleInterpolation> = {
    primary: css`
      color: ${theme.assets.primary};
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    success: css`
      color: ${theme.assets.success};
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    warning: css`
      color: ${theme.assets.warning};
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    danger: css`
      color: ${theme.assets.danger};
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

  const alernativeStyles: Record<VariantType, FlattenSimpleInterpolation> = {
    primary: css`
      border-color: ${theme.colors.grey[4]};
      color: ${theme.colors.grey[6]};
      &:hover:not([disabled]) {
        color: ${theme.assets.primary};
        border-color: ${theme.assets.primary};
      }
    `,
    success: css`
      border-color: ${theme.colors.grey[4]};
      color: ${theme.colors.grey[6]};
      &:hover:not([disabled]) {
        color: ${theme.assets.success};
        border-color: ${theme.assets.success};
      }
    `,
    warning: css`
      border-color: ${theme.colors.grey[4]};
      color: ${theme.colors.grey[6]};
      &:hover:not([disabled]) {
        color: ${theme.assets.warning};
        border-color: ${theme.assets.warning};
      }
    `,
    danger: css`
      border-color: ${theme.colors.grey[4]};
      color: ${theme.colors.grey[6]};
      &:hover:not([disabled]) {
        color: ${theme.assets.danger};
        border-color: ${theme.assets.danger};
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
  variant: VariantType;
  shape: ButtonShapeType;
}>`
  width: ${({ block }) => (block ? "100%" : "auto")};
  border: 1px solid transparent;
  ${({ size, theme }) => getSizeStyles(size, theme)};
  ${({ shape, theme }) => getShapeStyles(shape, theme)};
  ${({ variant, kind, theme }) => getColorStyles(variant, kind, theme)};
  transition: all ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.out};
  &:disabled {
    background-color: ${({ theme }) => theme.assets["disabled"]};
    border-color: transparent;
    cursor: not-allowed;
    color: ${({ theme }) => theme.assets["disabled-font"]};
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;
