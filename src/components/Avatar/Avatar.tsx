import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { AvatarSizeType } from "./Avatar.types";
import { useBoolean } from "@/hooks";

type AvatarProps = {
  src: string;
  name: string;
  size?: AvatarSizeType;
};

export const Avatar: FunctionComponent<AvatarProps> = ({ src, name, size = "sm" }) => {
  const [isError, setError] = useBoolean();

  const handleError = () => {
    setError.on();
  };

  const symbols = name
    .split(" ")
    .map((string) => string.charAt(0))
    .join("");

  return (
    <Container size={size} isError={isError}>
      {isError ? <Name>{symbols}</Name> : <Image src={src} alt={name} onError={handleError} />}
    </Container>
  );
};

const Container = styled.div<{ size: AvatarSizeType; isError: boolean }>`
  border-radius: ${({ theme }) => theme.borderRadius.full};
  ${({ size, theme }) => {
    const sizes: Record<AvatarSizeType, string> = {
      xs: theme.sizes[8],
      sm: theme.sizes[12],
      md: theme.sizes[16],
      lg: theme.sizes[20],
      xl: theme.sizes[24],
      "2xl": theme.sizes[28],
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
        background-color: ${theme.colors.grey[10]};
        color: ${theme.colors.grey[1]};
        overflow: hidden;
      `;
    }
  }};
`;

const Name = styled.span`
  border-radius: inherit;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const Image = styled.img`
  border-radius: inherit;
`;
