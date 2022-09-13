import { FunctionComponent, ButtonHTMLAttributes } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { theme } from "../App";
import { Spinner } from "../Spinner";

const ANIMATION_TIME = 300;

type KindType = "contained" | "outlined";
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
      font-size: 16px;
    `,
    large: css`
      height: 56px;
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
  const variantContainedOptions: Record<VariantType, FlattenSimpleInterpolation> = {
    default: css`
      background-color: ${theme.colors.blue};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.blue};
    `,
    positive: css`
      background-color: ${theme.colors.green};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.green};
    `,
    warning: css`
      background-color: ${theme.colors.yellow};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.yellow};
    `,
    negative: css`
      background-color: ${theme.colors.red};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.red};
    `,
    neutral: css`
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.black};
    `,
  };

  const variantOutlinedOptions: Record<VariantType, FlattenSimpleInterpolation> = {
    default: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.blue};
      border: 1px solid ${theme.colors.blue};
    `,
    positive: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.green};
      border: 1px solid ${theme.colors.green};
    `,
    warning: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.yellow};
      border: 1px solid ${theme.colors.yellow};
    `,
    negative: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.red};
      border: 1px solid ${theme.colors.red};
    `,
    neutral: css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      border: 1px solid ${theme.colors.black};
    `,
  };

  if (kind === "contained") {
    return variantContainedOptions[variant];
  } else {
    return variantOutlinedOptions[variant];
  }
};

const CustomButton = styled.button<{
  block?: boolean;
  kind: KindType;
  size: SizeType;
  variant: VariantType;
  shape: ShapeType;
}>`
  width: ${({ block }) => (block ? "100%" : "auto")};
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
