import { PlacementType } from "./Popover.types";

export const getPopoverPosition = (
  child: HTMLDivElement,
  popover: HTMLDivElement,
  position: PlacementType,
  gap: number
) => {
  const {
    top: childTop,
    left: childLeft,
    height: childHeight,
    width: childWidth,
  } = child.getBoundingClientRect();

  const { width: popoverWidth, height: popoverHeight } = popover.getBoundingClientRect();

  let correctedLeft = childLeft;

  let correctedTop = childTop;

  switch (position) {
    case "top": {
      correctedLeft = correctedLeft + childWidth / 2 - popoverWidth / 2;
      correctedTop = correctedTop - gap - popoverHeight;
      break;
    }
    case "left": {
      correctedLeft = childLeft - gap - popoverWidth;
      correctedTop = correctedTop + childHeight / 2 - popoverHeight / 2;
      break;
    }
    case "right": {
      correctedLeft = correctedLeft + childWidth + gap;
      correctedTop = correctedTop + childHeight / 2 - popoverHeight / 2;
      break;
    }
    case "bottom":
    default:
      correctedLeft = correctedLeft + childWidth / 2 - popoverWidth / 2;
      correctedTop = correctedTop + childHeight + gap;
  }
  return {
    left: correctedLeft,
    top: correctedTop,
  };
};
