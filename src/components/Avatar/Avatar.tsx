import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { AvatarShapeType, AvatarSizeType } from "./Avatar.types";
import { useBoolean } from "@/hooks";

type AvatarProps = {
  name: string;
  src?: string;
  size?: AvatarSizeType;
  shape?: AvatarShapeType;
};

const Avatar: FunctionComponent<AvatarProps> = ({
  name,
  src,
  size = "md",
  shape = "circle",
  ...restProps
}) => {
  const [isError, setError] = useBoolean(!src);

  const handleError = () => {
    setError.on();
  };

  const symbols = name
    .split(" ")
    .map((string) => string.charAt(0))
    .join("");

  return (
    <Container $size={size} $isError={isError} $shape={shape} {...restProps}>
      {isError ? <Name>{symbols}</Name> : <Image src={src} alt={name} onError={handleError} />}
    </Container>
  );
};

export { Avatar, type AvatarProps };

const Container = styled.div<{
  $size: AvatarSizeType;
  $isError: boolean;
  $shape: AvatarShapeType;
}>`
  border-radius: ${({ theme, $shape }) => {
    const shapes: Record<AvatarShapeType, string> = {
      sqaure: theme.borderRadius.none,
      rounded: theme.borderRadius.md,
      circle: theme.borderRadius.full,
    };
    return shapes[$shape];
  }};
  ${({ $size, theme }) => {
    const sizes: Record<AvatarSizeType, string> = {
      xs: theme.spacing[8],
      sm: theme.spacing[12],
      md: theme.spacing[16],
      lg: theme.spacing[20],
      xl: theme.spacing[24],
      "2xl": theme.spacing[28],
      "3xl": theme.spacing[32],
    };

    return css`
      width: ${sizes[$size]};
      height: ${sizes[$size]};
    `;
  }};
  ${({ $isError, theme }) => {
    if ($isError) {
      return css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
        overflow: hidden;
      `;
    }
  }};
`;

const Name = styled.span`
  border-radius: inherit;
  text-transform: uppercase;
`;

const Image = styled.img`
  border-radius: inherit;
`;
