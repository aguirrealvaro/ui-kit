import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { SIZES } from "./Avatar.constants";
import { SizeType } from "./Avatar.types";

type AvatarProps = {
  src: string;
  name: string;
  size?: SizeType;
};

export const Avatar: FunctionComponent<AvatarProps> = ({ src, name, size = "sm" }) => {
  const sizeNumber = SIZES[size];

  return (
    <Container size={sizeNumber}>
      <Image src={src} alt={name} />
    </Container>
  );
};

const Container = styled.div<{ size: number }>`
  ${({ size }) => {
    return css`
      width: ${size}px;
      height: ${size}px;
    `;
  }}
  border-radius: 50%;
`;

const Image = styled.img`
  border-radius: inherit;
`;
