import { FunctionComponent } from "react";
import { ChevronLeft } from "@styled-icons/boxicons-regular/ChevronLeft";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import styled, { css } from "styled-components";
import { StyledIcon } from "styled-icons/types";
import { CarousselDirectionType } from "../Caroussel.types";
import { Icon } from "@/components";

type ArrowProps = {
  direction: CarousselDirectionType;
  handleArrow: (direction: CarousselDirectionType) => void;
  disabled: boolean;
};

export const Arrow: FunctionComponent<ArrowProps> = ({ direction, handleArrow, disabled }) => {
  const chevronIcon: Record<CarousselDirectionType, StyledIcon> = {
    left: ChevronLeft,
    right: ChevronRight,
  };

  return (
    <Button onClick={() => handleArrow(direction)} direction={direction} disabled={disabled}>
      <Icon icon={chevronIcon[direction]} size={22} />
    </Button>
  );
};

const Button = styled.button<{ direction: CarousselDirectionType }>`
  align-self: baseline;
  line-height: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction, theme }) =>
    css`
      padding: 17px;
      background-color: ${theme.colors.grey[1]};
      box-shadow: ${theme.shadows.sm};
      border-radius: ${theme.borderRadius.full};
      ${direction === "left"
        ? css`
            left: -32px;
          `
        : css`
            right: -32px;
          `}
    `};
  &:disabled {
    display: none;
  }
`;
