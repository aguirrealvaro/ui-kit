import { PlacementType } from "./Popover.types";

export const getPopoverPosition = (
  el: HTMLDivElement,
  popover: HTMLDivElement,
  position: PlacementType,
  gap: number
) => {
  const {
    top: elTop,
    left: elLeft,
    height: elHeight,
    width: elWidth,
  } = el.getBoundingClientRect();

  const { width: popoverWidth, height: popoverHeight } = popover.getBoundingClientRect();

  let correctedLeft = elLeft;

  let correctedTop = elTop;

  switch (position) {
    case "top": {
      correctedLeft = correctedLeft + elWidth / 2 - popoverWidth / 2;
      correctedTop = correctedTop - gap * 2 - popoverHeight;
      break;
    }
    case "left": {
      correctedLeft = elLeft - gap * 2 - popoverWidth;
      correctedTop = correctedTop + elHeight / 2 - popoverHeight / 2;
      break;
    }
    case "right": {
      correctedLeft = correctedLeft + elWidth + gap;
      correctedTop = correctedTop + elHeight / 2 - popoverHeight / 2;
      break;
    }
    case "bottom":
    default:
      correctedLeft = correctedLeft + elWidth / 2 - popoverWidth / 2;
      correctedTop = correctedTop + elHeight + gap;
  }
  return {
    left: correctedLeft,
    top: correctedTop,
  };
};
