import { FunctionComponent } from "react";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import styled, { css } from "styled-components";
import { StyledIcon as StyledIconType } from "styled-icons/types";
import { Direction } from ".";
import { StyledIcon } from "@/components";

type ArrowProps = {
  direction: Direction;
  handleArrow: (direction: Direction) => void;
  disabled: boolean;
};

export const Arrow: FunctionComponent<ArrowProps> = ({ direction, handleArrow, disabled }) => {
  const chevronIcon: Record<Direction, StyledIconType> = {
    left: ChevronLeft,
    right: ChevronRight,
  };

  return (
    <Button onClick={() => handleArrow(direction)} direction={direction} disabled={disabled}>
      <StyledIcon icon={chevronIcon[direction]} color="#666666" size="22px" />
    </Button>
  );
};

const Button = styled.button<{ direction: Direction }>`
  align-self: baseline;
  line-height: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) =>
    css`
      padding: 17px;
      background: #fff;
      box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11);
      border-radius: 50%;
      ${direction === "left"
        ? css`
            left: -32px;
          `
        : css`
            right: -32px;
          `}
    `}
  &:disabled {
    display: none;
  }
`;
