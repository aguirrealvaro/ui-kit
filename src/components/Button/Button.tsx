import { FunctionComponent, ButtonHTMLAttributes, ReactNode, MouseEvent } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { Spinner } from "../Spinner";
import { ButtonVariantType, ButtonSizeType, ButtonShapeType } from "./Button.types";
import { theme } from "@/css";
import { Colors } from "@/css/theme/colors";

type ButtonProps = {
  block?: boolean;
  isLoading?: boolean;
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  colorScheme?: Colors;
  shape?: ButtonShapeType;
  startElement?: ReactNode;
  endElement?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  block,
  isLoading,
  variant = "primary",
  size = "md",
  colorScheme = "grey",
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
    if (isLoading) return <Spinner size="xs" color={theme.colors.grey.default} />;

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
      variant={variant}
      size={size}
      colorScheme={colorScheme}
      onClick={handleOnClick}
      shape={shape}
      type={type}
      {...restProps}
    >
      {renderChildren()}
    </CustomButton>
  );
};

const getSizeStyles = (size: ButtonSizeType): FlattenSimpleInterpolation => {
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

const getShapeStyles = (shape: ButtonShapeType): FlattenSimpleInterpolation => {
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
  colorScheme: Colors,
  variant: ButtonVariantType
): FlattenSimpleInterpolation => {
  const primaryStyles: Record<Colors, FlattenSimpleInterpolation> = {
    grey: css`
      background-color: ${theme.colors.grey.default};
      color: ${theme.colors.white};
      border-color: ${theme.colors.grey.default};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[900]};
        border-color: ${theme.colors.grey[900]};
      }
    `,
    blue: css`
      background-color: ${theme.colors.blue.default};
      color: ${theme.colors.white};
      border-color: ${theme.colors.blue.default};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.blue[700]};
        border-color: ${theme.colors.blue[700]};
      }
    `,
    green: css`
      background-color: ${theme.colors.green.default};
      color: ${theme.colors.white};
      border-color: ${theme.colors.green.default};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.green[700]};
        border-color: ${theme.colors.green[700]};
      }
    `,
    yellow: css`
      background-color: ${theme.colors.yellow.default};
      color: ${theme.colors.white};
      border-color: ${theme.colors.yellow.default};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.yellow[700]};
        border-color: ${theme.colors.yellow[700]};
      }
    `,
    red: css`
      background-color: ${theme.colors.red.default};
      color: ${theme.colors.white};
      border-color: ${theme.colors.red.default};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.red[700]};
        border-color: ${theme.colors.red[700]};
      }
    `,
  };

  const secondaryStyles: FlattenSimpleInterpolation = css`
    border-color: transparent;
    color: ${theme.colors.grey[600]};
    background-color: ${theme.colors.grey[100]};
    &:hover:not([disabled]) {
      background-color: ${theme.colors.grey[200]};
    }
  `;

  const outlineStyles: FlattenSimpleInterpolation = css`
    border-color: ${theme.colors.grey[200]};
    color: ${theme.colors.grey[600]};
    background-color: transparent;
    &:hover:not([disabled]) {
      background-color: ${theme.colors.grey[100]};
    }
  `;

  const ghostStyles: Record<Colors, FlattenSimpleInterpolation> = {
    grey: css`
      color: ${theme.colors.grey.default};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[100]};
      }
    `,
    blue: css`
      color: ${theme.colors.blue.default};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.blue[50]};
      }
    `,
    green: css`
      color: ${theme.colors.green.default};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.green[50]};
      }
    `,
    yellow: css`
      color: ${theme.colors.yellow.default};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.yellow[50]};
      }
    `,
    red: css`
      color: ${theme.colors.red.default};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.red[50]};
      }
    `,
  };

  const linkStyles: Record<Colors, FlattenSimpleInterpolation> = {
    grey: css`
      color: ${theme.colors.grey.default};
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    blue: css`
      color: ${theme.colors.blue.default};
      background-color: transparent;
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    green: css`
      color: ${theme.colors.green.default};
      background-color: transparent;
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    yellow: css`
      color: ${theme.colors.yellow.default};
      background-color: transparent;
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
    red: css`
      color: ${theme.colors.red.default};
      background-color: transparent;
      &:hover:not([disabled]) {
        text-decoration: underline;
      }
    `,
  };

  const colorOptions: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    primary: primaryStyles[colorScheme],
    secondary: secondaryStyles,
    outline: outlineStyles,
    ghost: ghostStyles[colorScheme],
    link: linkStyles[colorScheme],
  };

  return colorOptions[variant];
};

const CustomButton = styled.button<{
  block?: boolean;
  variant: ButtonVariantType;
  size: ButtonSizeType;
  colorScheme: Colors;
  shape: ButtonShapeType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: ${({ block }) => (block ? "100%" : "auto")};
  border: 1px solid transparent;
  ${({ size }) => getSizeStyles(size)};
  ${({ shape }) => getShapeStyles(shape)};
  ${({ colorScheme, variant }) => getColorStyles(colorScheme, variant)};
  transition: all ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.out};
  &:disabled {
    background-color: ${({ theme }) => theme.assets.disabledPrimary};
    border-color: transparent;
    cursor: not-allowed;
    color: ${({ theme }) => theme.assets.disabledSecondary};
  }
`;
