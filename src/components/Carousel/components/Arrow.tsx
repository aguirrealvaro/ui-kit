import { FunctionComponent } from "react";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import styled, { css } from "styled-components";
import { StyledIcon } from "styled-icons/types";
import { CarouselDirectionType } from "../Carousel.types";
import { Icon } from "@/components";

type ArrowProps = {
  direction: CarouselDirectionType;
  handleArrow: (direction: CarouselDirectionType) => void;
  disabled: boolean;
};

export const Arrow: FunctionComponent<ArrowProps> = ({ direction, handleArrow, disabled }) => {
  const chevronIcon: Record<CarouselDirectionType, StyledIcon> = {
    left: ChevronLeft,
    right: ChevronRight,
  };

  return (
    <Button onClick={() => handleArrow(direction)} direction={direction} disabled={disabled}>
      <Icon icon={chevronIcon[direction]} size={22} />
    </Button>
  );
};

const Button = styled.button<{ direction: CarouselDirectionType }>`
  align-self: baseline;
  line-height: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction, theme }) =>
    css`
      padding: ${theme.spacing[4]};
      background-color: ${theme.assets.bgSecondary};
      box-shadow: ${theme.shadows.sm};
      border-radius: ${theme.borderRadius.full};
      ${direction === "left"
        ? css`
            left: -${theme.spacing[8]};
          `
        : css`
            right: -${theme.spacing[8]};
          `}
    `};
  &:disabled {
    display: none;
  }
`;
