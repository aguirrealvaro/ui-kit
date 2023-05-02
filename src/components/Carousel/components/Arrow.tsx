import { FunctionComponent } from "react";
import { ChevronLeft, ChevronRight, LucideIcon as LucideIconType } from "lucide-react";
import styled, { css } from "styled-components";
import { CarouselDirectionType } from "../Carousel.types";
import { LucideIcon } from "@/components";

type ArrowProps = {
  direction: CarouselDirectionType;
  handleArrow: (direction: CarouselDirectionType) => void;
  disabled: boolean;
};

export const Arrow: FunctionComponent<ArrowProps> = ({ direction, handleArrow, disabled }) => {
  const chevronIcon: Record<CarouselDirectionType, LucideIconType> = {
    left: ChevronLeft,
    right: ChevronRight,
  };

  return (
    <Button
      type="button"
      onClick={() => handleArrow(direction)}
      direction={direction}
      disabled={disabled}
      tabIndex={-1}
    >
      <LucideIcon icon={chevronIcon[direction]} />
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
