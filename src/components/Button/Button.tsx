import React, { FunctionComponent, ButtonHTMLAttributes } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { Spinner } from "../Spinner";

const ANIMATION_TIME = 300;

type KindType = "contained" | "outlined" | "text";
type SizeType = "mini" | "compact" | "default" | "large";
type VariantType = "default" | "positive" | "negative" | "warning" | "neutral";
type ShapeType = "default" | "pill" | "circle" | "rectangle";

type ButtonProps = {
  block?: boolean;
  isLoading?: boolean;
  kind?: KindType;
  size?: SizeType;
  variant?: VariantType;
  shape?: ShapeType;
};

export const Button: FunctionComponent<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  onClick,
  block,
  isLoading,
  kind = "contained",
  size = "default",
  variant = "default",
  shape = "default",
  ...restProps
}) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading) return;
    onClick?.(e);
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
      {isLoading ? <Spinner size="mini" /> : children}
    </CustomButton>
  );
};

const getShapeStyles = (shape: ShapeType): FlattenSimpleInterpolation => {
  const shapeOptions = {
    default: css`
      border-radius: 8px;
    `,
    pill: css`
      border-radius: 42px;
    `,
    circle: css`
      border-radius: 100%;
      width: 56px;
      height: 56px;
      padding: 0 !important;
    `,
    rectangle: css`
      border-radius: 0px;
    `,
  };

  return shapeOptions[shape];
};

const variantColors: Record<VariantType, string> = {
  default: "blue",
  positive: "green",
  negative: "red",
  warning: "yellow",
  neutral: "black",
};

const getSizeStyles = (size: SizeType): FlattenSimpleInterpolation => {
  const sizeOptions: Record<SizeType, FlattenSimpleInterpolation> = {
    mini: css`
      height: 28px;
      padding: 0rem 0.5rem;
      font-size: 12px;
    `,
    compact: css`
      height: 36px;
      padding: 0 1rem;
      font-size: 14px;
    `,
    default: css`
      height: 48px;
      padding: 0 1.5rem;
      font-size: 17px;
    `,
    large: css`
      height: 56px;
      padding: 0 2rem;
      font-size: 18px;
    `,
  };

  return sizeOptions[size];
};

const CustomButton = styled.button<{
  block?: boolean;
  kind: KindType;
  size: SizeType;
  variant: VariantType;
  shape: ShapeType;
}>`
  text-align: center;
  transition: all ${ANIMATION_TIME}ms ease;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  width: ${({ block }) => (block ? "100%" : "auto")};
  ${({ shape }) => getShapeStyles(shape)};
  ${({ size }) => getSizeStyles(size)};
  ${({ kind, theme, variant }) => {
    if (kind === "contained") {
      return css`
        background-color: ${theme.colors[variantColors[variant]]};
        color: ${theme.colors.white};
        border: 1px solid ${theme.colors[variantColors[variant]]};
      `;
    }
    if (kind === "outlined") {
      return css`
        background-color: ${theme.colors.white};
        color: ${theme.colors[variantColors[variant]]};
        border: 1px solid ${theme.colors[variantColors[variant]]};
        &:hover {
          background-color: ${theme.colors[variantColors[variant]]};
          color: ${theme.colors.white};
        }
      `;
    }
    if (kind === "text") {
      return css`
        color: ${theme.colors[variantColors[variant]]};
        border: 1px solid transparent;
        &:hover {
          background-color: ${theme.colors[variantColors[variant]]};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors[variantColors[variant]]};
        }
      `;
    }
  }}
`;
