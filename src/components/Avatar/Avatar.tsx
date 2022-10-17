import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { AvatarShapeType, AvatarSizeType } from "./Avatar.types";
import { useBoolean } from "@/hooks";

type AvatarProps = {
  src: string;
  name: string;
  size?: AvatarSizeType;
  shape?: AvatarShapeType;
};

export const Avatar: FunctionComponent<AvatarProps> = ({
  src,
  name,
  size = "sm",
  shape = "circle",
}) => {
  const [isError, setError] = useBoolean();

  const handleError = () => {
    setError.on();
  };

  const symbols = name
    .split(" ")
    .map((string) => string.charAt(0))
    .join("");

  return (
    <Container size={size} isError={isError} shape={shape}>
      {isError ? <Name>{symbols}</Name> : <Image src={src} alt={name} onError={handleError} />}
    </Container>
  );
};

const Container = styled.div<{
  size: AvatarSizeType;
  isError: boolean;
  shape: AvatarShapeType;
}>`
  border-radius: ${({ theme, shape }) => {
    const shapes: Record<AvatarShapeType, string> = {
      sqaure: theme.borderRadius.none,
      rounded: theme.borderRadius.md,
      circle: theme.borderRadius.full,
    };
    return shapes[shape];
  }};
  ${({ size, theme }) => {
    const sizes: Record<AvatarSizeType, string> = {
      xs: theme.sizes[8],
      sm: theme.sizes[12],
      md: theme.sizes[16],
      lg: theme.sizes[20],
      xl: theme.sizes[24],
      "2xl": theme.sizes[28],
      "3xl": theme.sizes[32],
    };

    return css`
      width: ${sizes[size]};
      height: ${sizes[size]};
    `;
  }};
  ${({ isError, theme }) => {
    if (isError) {
      return css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.assets.avatarBg};
        color: ${theme.assets.avatarText};
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
