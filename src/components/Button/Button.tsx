import { FunctionComponent, ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { ThemeType } from "../../css/types";
import { Spinner } from "../Spinner";
import { ANIMATION_TIME } from "./Button.constants";
import {
  ButtonKindType,
  ButtonSizeType,
  ButtonVariantType,
  ButtonShapeType,
} from "./Button.types";

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
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading) return;
    onClick?.(e);
  };

  const renderChildren = () => {
    if (isLoading) return <Spinner size="xs" background="light" />;
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

const getSizeStyles = (size: ButtonSizeType): FlattenSimpleInterpolation => {
  const sizeOptions: Record<ButtonSizeType, FlattenSimpleInterpolation> = {
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

const getShapeStyles = (shape: ButtonShapeType): FlattenSimpleInterpolation => {
  const shapeOptions: Record<ButtonShapeType, FlattenSimpleInterpolation> = {
    default: css`
      border-radius: 4px;
    `,
    pill: css`
      border-radius: 42px;
    `,
    rectangle: css`
      border-radius: 0px;
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
      background-color: ${theme.palette.blue.base};
      color: ${theme.palette.grey[1]};
      border-color: ${theme.palette.blue.base};
      &:hover {
        background-color: #328eff;
        border-color: #328eff;
      }
    `,
    positive: css`
      background-color: ${theme.palette.green.base};
      color: ${theme.palette.grey[1]};
      border-color: ${theme.palette.green.base};
      &:hover {
        background-color: #04aa5a;
        border-color: #04aa5a;
      }
    `,
    warning: css`
      background-color: ${theme.palette.yellow.base};
      color: ${theme.palette.grey[13]};
      border-color: ${theme.palette.yellow.base};
      &:hover {
        background-color: #f5cf82;
        border-color: #f5cf82;
      }
    `,
    negative: css`
      background-color: ${theme.palette.red.base};
      color: ${theme.palette.grey[1]};
      border-color: ${theme.palette.red.base};
      &:hover {
        background-color: #e06470;
        border-color: #e06470;
      }
    `,
    neutral: css`
      background-color: ${theme.palette.grey[13]};
      color: ${theme.palette.grey[1]};
      border-color: ${theme.palette.grey[13]};
      &:hover {
        background-color: #303030;
        border-color: #303030;
      }
    `,
  };

  const outlinedHover = "#ebebeb";

  const outlinedStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    default: css`
      color: ${theme.palette.blue.base};
      border-color: ${theme.palette.blue.base};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    positive: css`
      color: ${theme.palette.green.base};
      border-color: ${theme.palette.green.base};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    warning: css`
      color: ${theme.palette.yellow.base};
      border-color: ${theme.palette.yellow.base};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    negative: css`
      color: ${theme.palette.red.base};
      border-color: ${theme.palette.red.base};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
    neutral: css`
      color: ${theme.palette.grey[13]};
      border-color: ${theme.palette.grey[13]};
      &:hover {
        background-color: ${outlinedHover};
      }
    `,
  };

  const ghostStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    default: css`
      color: ${theme.palette.blue.base};
      &:hover {
        background-color: #e3efff;
      }
    `,
    positive: css`
      color: ${theme.palette.green.base};
      &:hover {
        background-color: #e1fcef;
      }
    `,
    warning: css`
      color: ${theme.palette.yellow.base};
      &:hover {
        background-color: #faf5ec;
      }
    `,
    negative: css`
      color: ${theme.palette.red.base};
      &:hover {
        background-color: #fcedee;
      }
    `,
    neutral: css`
      color: ${theme.palette.grey[13]};
      &:hover {
        background-color: #ebebeb;
      }
    `,
  };

  const linkStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    default: css`
      color: ${theme.palette.blue.base};
      &:hover {
        text-decoration: underline;
      }
    `,
    positive: css`
      color: ${theme.palette.green.base};
      &:hover {
        text-decoration: underline;
      }
    `,
    warning: css`
      color: ${theme.palette.yellow.base};
      &:hover {
        text-decoration: underline;
      }
    `,
    negative: css`
      color: ${theme.palette.red.base};
      &:hover {
        text-decoration: underline;
      }
    `,
    neutral: css`
      color: ${theme.palette.grey[13]};
      &:hover {
        text-decoration: underline;
      }
    `,
  };

  const primaryStyles: Record<ButtonVariantType, FlattenSimpleInterpolation> = {
    default: css`
      border-color: #d9d9d9;
      color: ${theme.palette.grey.base};
      &:hover {
        color: ${theme.palette.blue};
        border-color: ${theme.palette.blue.base};
      }
    `,
    positive: css`
      border-color: #d9d9d9;
      color: ${theme.palette.grey.base};
      &:hover {
        color: ${theme.palette.green.base};
        border-color: ${theme.palette.green.base};
      }
    `,
    warning: css`
      border-color: #d9d9d9;
      color: ${theme.palette.grey.base};
      &:hover {
        color: ${theme.palette.yellow.base};
        border-color: ${theme.palette.yellow.base};
      }
    `,
    negative: css`
      border-color: #d9d9d9;
      color: ${theme.palette.grey.base};
      &:hover {
        color: ${theme.palette.red};
        border-color: ${theme.palette.red.base};
      }
    `,
    neutral: css`
      border-color: #d9d9d9;
      color: ${theme.palette.grey};
      &:hover {
        color: ${theme.palette.grey[13]};
        border-color: ${theme.palette.grey[13]};
      }
    `,
  };

  const colorOptions: Record<ButtonKindType, FlattenSimpleInterpolation> = {
    solid: solidStyles[variant],
    outlined: outlinedStyles[variant],
    ghost: ghostStyles[variant],
    link: linkStyles[variant],
    primary: primaryStyles[variant],
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
  ${({ size }) => getSizeStyles(size)};
  ${({ shape }) => getShapeStyles(shape)};
  ${({ variant, kind, theme }) => getColorStyles(variant, kind, theme)};
  transition: all ${ANIMATION_TIME}ms ease;
  &:disabled {
    background: #e9e9e9;
    border: 1px solid transparent;
    cursor: not-allowed;
    color: #afafaf;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
