import { FunctionComponent, ButtonHTMLAttributes } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { theme } from "../App";
import { Spinner } from "../Spinner";

const ANIMATION_TIME = 300;

type KindType = "solid" | "outlined" | "ghost";
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
  kind = "solid",
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

const getSizeStyles = (size: SizeType): FlattenSimpleInterpolation => {
  const sizeOptions: Record<SizeType, FlattenSimpleInterpolation> = {
    mini: css`
      height: 24px;
      padding: 0rem 0.5rem;
      font-size: 12px;
    `,
    compact: css`
      height: 34px;
      padding: 0 1rem;
      font-size: 14px;
    `,
    default: css`
      height: 44px;
      padding: 0 1.5rem;
      font-size: 16px;
    `,
    large: css`
      height: 54px;
      padding: 0 2rem;
      font-size: 18px;
    `,
  };

  return sizeOptions[size];
};

const getShapeStyles = (shape: ShapeType): FlattenSimpleInterpolation => {
  const shapeOptions = {
    default: css`
      border-radius: 4px;
    `,
    pill: css`
      border-radius: 42px;
    `,
    circle: css`
      border-radius: 100%;
      width: 56px;
      height: 56px;
      padding: 0;
      text-align: center;
    `,
    rectangle: css`
      border-radius: 0px;
    `,
  };

  return shapeOptions[shape];
};

const getColorStyles = (variant: VariantType, kind: KindType): FlattenSimpleInterpolation => {
  const variantSolidOptions: Record<VariantType, FlattenSimpleInterpolation> = {
    default: css`
      background-color: ${theme.colors.blue};
      color: ${theme.colors.white};
      border-color: ${theme.colors.blue};
      &:hover {
        background-color: #014ca7;
        border-color: #014ca7;
      }
    `,
    positive: css`
      background-color: ${theme.colors.green};
      color: ${theme.colors.white};
      border-color: ${theme.colors.green};
      &:hover {
        background-color: #03753e;
        border-color: #03753e;
      }
    `,
    warning: css`
      background-color: ${theme.colors.yellow};
      color: ${theme.colors.black};
      border-color: ${theme.colors.yellow};
      &:hover {
        background-color: #dda534;
        border-color: #dda534;
      }
    `,
    negative: css`
      background-color: ${theme.colors.red};
      color: ${theme.colors.white};
      border-color: ${theme.colors.red};
      &:hover {
        background-color: #b33844;
        border-color: #b33844;
      }
    `,
    neutral: css`
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
      border-color: ${theme.colors.black};
    `,
  };

  const outlinedHover = "#ebebeb";

  const variantOutlinedOptions: Record<VariantType, FlattenSimpleInterpolation> = {
    default: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.blue};
      border-color: ${theme.colors.blue};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    positive: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.green};
      border-color: ${theme.colors.green};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    warning: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.yellow};
      border-color: ${theme.colors.yellow};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    negative: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.red};
      border-color: ${theme.colors.red};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    neutral: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      border-color: ${theme.colors.black};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
  };

  const variantGhostOptions: Record<VariantType, FlattenSimpleInterpolation> = {
    default: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.blue};
      &:hover {
        background-color: #e3efff;
      }
    `,
    positive: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.green};
      &:hover {
        background-color: #e1fcef;
      }
    `,
    warning: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.yellow};
      &:hover {
        background-color: #faf5ec;
      }
    `,
    negative: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.red};
      &:hover {
        background-color: #fcedee;
      }
    `,
    neutral: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      &:hover {
        background-color: #ebebeb;
      }
    `,
  };

  const colorOptions: Record<KindType, FlattenSimpleInterpolation> = {
    solid: variantSolidOptions[variant],
    outlined: variantOutlinedOptions[variant],
    ghost: variantGhostOptions[variant],
  };

  return colorOptions[kind];
};

const CustomButton = styled.button<{
  block?: boolean;
  kind: KindType;
  size: SizeType;
  variant: VariantType;
  shape: ShapeType;
}>`
  width: ${({ block }) => (block ? "100%" : "auto")};
  border: 1px solid transparent;
  ${({ size }) => getSizeStyles(size)};
  ${({ shape }) => getShapeStyles(shape)};
  ${({ variant, kind }) => getColorStyles(variant, kind)};
  transition: all ${ANIMATION_TIME}ms ease;
  &:disabled {
    background: #e9e9e9;
    border: 1px solid transparent;
    cursor: not-allowed;
    color: #afafaf;
  }
`;
