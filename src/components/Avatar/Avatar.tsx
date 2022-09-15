import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { SIZES } from "./Avatar.constants";
import { SizeType } from "./Avatar.types";
import { useBoolean } from "@/hooks";

type AvatarProps = {
  src: string;
  name: string;
  size?: SizeType;
};

export const Avatar: FunctionComponent<AvatarProps> = ({ src, name, size = "sm" }) => {
  const [isError, setError] = useBoolean();
  const sizeNumber = SIZES[size];

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
  border-radius: 50%;
  ${({ size }) => {
    return css`
      width: ${size}px;
      height: ${size}px;
    `;
  }}
  ${({ isError, theme }) => {
    if (isError) {
      return css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
        overflow: hidden;
      `;
    }
  }}
`;

const Name = styled.span`
  border-radius: inherit;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const Image = styled.img`
  border-radius: inherit;
`;
