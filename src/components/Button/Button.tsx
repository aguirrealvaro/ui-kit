import { FunctionComponent, ButtonHTMLAttributes } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { StyledIcon } from "styled-icons/types";
import { theme } from "../App";
import { Spinner } from "../Spinner";
import { ANIMATION_TIME } from "./Button.constants";
import { KindType, SizeType, VariantType, ShapeType } from "./Button.types";

type ButtonProps = {
  block?: boolean;
  isLoading?: boolean;
  kind?: KindType;
  size?: SizeType;
  variant?: VariantType;
  shape?: ShapeType;
  icon?: StyledIcon;
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
  ...restProps
}) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading) return;
    onClick?.(e);
  };

  const renderChildren = () => {
    if (isLoading) return <Spinner size="xs" background="light" />;
    return children;
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

const getSizeStyles = (size: SizeType): FlattenSimpleInterpolation => {
  const sizeOptions: Record<SizeType, FlattenSimpleInterpolation> = {
    xs: css`
      height: 24px;
      padding: 0rem 8px;
      font-size: 12px;
    `,
    sm: css`
      height: 32px;
      padding: 0 12px;
      font-size: 14px;
    `,
    md: css`
      height: 40px;
      padding: 0 16px;
      font-size: 16px;
    `,
    lg: css`
      height: 48px;
      padding: 0 20px;
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
      color: ${theme.colors.blue};
      border-color: ${theme.colors.blue};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    positive: css`
      color: ${theme.colors.green};
      border-color: ${theme.colors.green};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    warning: css`
      color: ${theme.colors.yellow};
      border-color: ${theme.colors.yellow};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    negative: css`
      color: ${theme.colors.red};
      border-color: ${theme.colors.red};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    neutral: css`
      color: ${theme.colors.black};
      border-color: ${theme.colors.black};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
  };

  const variantGhostOptions: Record<VariantType, FlattenSimpleInterpolation> = {
    default: css`
      color: ${theme.colors.blue};
      &:hover {
        background-color: #e3efff;
      }
    `,
    positive: css`
      color: ${theme.colors.green};
      &:hover {
        background-color: #e1fcef;
      }
    `,
    warning: css`
      color: ${theme.colors.yellow};
      &:hover {
        background-color: #faf5ec;
      }
    `,
    negative: css`
      color: ${theme.colors.red};
      &:hover {
        background-color: #fcedee;
      }
    `,
    neutral: css`
      color: ${theme.colors.black};
      &:hover {
        background-color: #ebebeb;
      }
    `,
  };

  const variantLinkOptions: Record<VariantType, FlattenSimpleInterpolation> = {
    default: css`
      color: ${theme.colors.blue};
      &:hover {
        text-decoration: underline;
      }
    `,
    positive: css`
      color: ${theme.colors.green};
      &:hover {
        text-decoration: underline;
      }
    `,
    warning: css`
      color: ${theme.colors.yellow};
      &:hover {
        text-decoration: underline;
      }
    `,
    negative: css`
      color: ${theme.colors.red};
      &:hover {
        text-decoration: underline;
      }
    `,
    neutral: css`
      color: ${theme.colors.black};
      &:hover {
        text-decoration: underline;
      }
    `,
  };

  const colorOptions: Record<KindType, FlattenSimpleInterpolation> = {
    solid: variantSolidOptions[variant],
    outlined: variantOutlinedOptions[variant],
    ghost: variantGhostOptions[variant],
    link: variantLinkOptions[variant],
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
