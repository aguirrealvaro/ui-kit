import { ButtonHTMLAttributes, ReactNode, MouseEvent, forwardRef } from "react";
import styled, { css, RuleSet } from "styled-components";
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

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
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
    },
    ref
  ) => {
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
        ref={ref}
        $block={block}
        $variant={variant}
        $size={size}
        $colorScheme={colorScheme}
        onClick={handleOnClick}
        $shape={shape}
        type={type}
        {...restProps}
      >
        {renderChildren()}
      </CustomButton>
    );
  }
);

export { Button, type ButtonProps };

const getSizeStyles = (size: ButtonSizeType): RuleSet<object> => {
  const sizeOptions: Record<ButtonSizeType, RuleSet<object>> = {
    xs: css`
      height: ${theme.spacing[6]};
      padding: 0 ${`${theme.spacing[2]}`};
      font-size: ${theme.typography.fontSizes.xs};
    `,
    sm: css`
      height: ${theme.spacing[8]};
      padding: 0 ${`${theme.spacing[3]}`};
      font-size: ${theme.typography.fontSizes.sm};
    `,
    md: css`
      height: ${theme.spacing[10]};
      padding: 0 ${`${theme.spacing[4]}`};
      font-size: ${theme.typography.fontSizes.md};
    `,
    lg: css`
      height: ${theme.spacing[12]};
      padding: 0 ${`${theme.spacing[5]}`};
      font-size: ${theme.typography.fontSizes.lg};
    `,
  };

  return sizeOptions[size];
};

const getShapeStyles = (shape: ButtonShapeType): RuleSet<object> => {
  const shapeOptions: Record<ButtonShapeType, RuleSet<object>> = {
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

const getColorStyles = (colorScheme: Colors, variant: ButtonVariantType): RuleSet<object> => {
  const primaryStyles: Record<Colors, RuleSet<object>> = {
    grey: css`
      background-color: ${theme.colors.grey.default};
      color: ${theme.colors.white};
      border-color: ${theme.colors.grey.default};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[700]};
        border-color: ${theme.colors.grey[700]};
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
      color: ${theme.colors.black};
      border-color: ${theme.colors.yellow.default};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.yellow[600]};
        border-color: ${theme.colors.yellow[600]};
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

  const secondaryStyles: Record<Colors, RuleSet<object>> = {
    grey: css`
      border-color: transparent;
      color: ${theme.colors.grey[600]};
      background-color: ${theme.colors.grey[200]};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[300]};
      }
    `,
    blue: css`
      border-color: transparent;
      color: ${theme.colors.blue[600]};
      background-color: ${theme.colors.blue[100]};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.blue[200]};
      }
    `,
    green: css`
      border-color: transparent;
      color: ${theme.colors.green[700]};
      background-color: ${theme.colors.green[100]};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.green[200]};
      }
    `,
    yellow: css`
      border-color: transparent;
      color: ${theme.colors.yellow[600]};
      background-color: ${theme.colors.yellow[100]};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.yellow[200]};
      }
    `,
    red: css`
      border-color: transparent;
      color: ${theme.colors.red[600]};
      background-color: ${theme.colors.red[100]};
      &:hover:not([disabled]) {
        background-color: ${theme.colors.red[200]};
      }
    `,
  };

  const outlinedStyles: Record<Colors, RuleSet<object>> = {
    grey: css`
      border-color: ${theme.colors.grey[200]};
      color: ${theme.colors.grey[600]};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[100]};
      }
    `,
    blue: css`
      border-color: ${theme.colors.blue[200]};
      color: ${theme.colors.blue[600]};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.blue[100]};
      }
    `,
    green: css`
      border-color: ${theme.colors.green[200]};
      color: ${theme.colors.green[600]};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.green[100]};
      }
    `,
    yellow: css`
      border-color: ${theme.colors.yellow[200]};
      color: ${theme.colors.yellow[500]};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.yellow[100]};
      }
    `,
    red: css`
      border-color: ${theme.colors.red[200]};
      color: ${theme.colors.red[600]};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.red[100]};
      }
    `,
  };

  const ghostStyles: Record<Colors, RuleSet<object>> = {
    grey: css`
      color: ${theme.colors.grey.default};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.grey[200]};
      }
    `,
    blue: css`
      color: ${theme.colors.blue.default};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.blue[100]};
      }
    `,
    green: css`
      color: ${theme.colors.green.default};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.green[100]};
      }
    `,
    yellow: css`
      color: ${theme.colors.yellow.default};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.yellow[100]};
      }
    `,
    red: css`
      color: ${theme.colors.red.default};
      background-color: transparent;
      &:hover:not([disabled]) {
        background-color: ${theme.colors.red[100]};
      }
    `,
  };

  const linkStyles: Record<Colors, RuleSet<object>> = {
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

  const colorOptions: Record<ButtonVariantType, RuleSet<object>> = {
    primary: primaryStyles[colorScheme],
    secondary: secondaryStyles[colorScheme],
    outlined: outlinedStyles[colorScheme],
    ghost: ghostStyles[colorScheme],
    link: linkStyles[colorScheme],
  };

  return colorOptions[variant];
};

const CustomButton = styled.button<{
  $block?: boolean;
  $variant: ButtonVariantType;
  $size: ButtonSizeType;
  $colorScheme: Colors;
  $shape: ButtonShapeType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: ${({ $block }) => ($block ? "100%" : "auto")};
  border: 1px solid transparent;
  ${({ $size }) => getSizeStyles($size)};
  ${({ $shape }) => getShapeStyles($shape)};
  ${({ $colorScheme, $variant }) => getColorStyles($colorScheme, $variant)};
  transition: all ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.out};
  &:disabled {
    background-color: ${({ theme }) => theme.tokens.disabledPrimary};
    border-color: transparent;
    cursor: not-allowed;
    color: ${({ theme }) => theme.tokens.disabledSecondary};
  }
`;
