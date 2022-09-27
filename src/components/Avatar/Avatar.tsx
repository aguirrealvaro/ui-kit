import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { AVATAR_SIZES } from "./Avatar.constants";
import { AvatarSizeType } from "./Avatar.types";
import { useBoolean } from "@/hooks";

type AvatarProps = {
  src: string;
  name: string;
  size?: AvatarSizeType;
};

export const Avatar: FunctionComponent<AvatarProps> = ({ src, name, size = "sm" }) => {
  const [isError, setError] = useBoolean();
  const sizeNumber = AVATAR_SIZES[size];

  const handleError = () => {
    setError.on();
  };

  const symbols = name
    .split(" ")
    .map((string) => string.charAt(0))
    .join("");

  return (
    <Container size={sizeNumber} isError={isError}>
      {isError ? <Name>{symbols}</Name> : <Image src={src} alt={name} onError={handleError} />}
    </Container>
  );
};

const Container = styled.div<{ size: number; isError: boolean }>`
  border-radius: ${({ theme }) => theme.borderRadius.full};
  ${({ size }) => {
    return css`
      width: ${size}px;
      height: ${size}px;
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
