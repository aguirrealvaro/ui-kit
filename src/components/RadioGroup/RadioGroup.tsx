import {
  FunctionComponent,
  Children,
  isValidElement,
  ReactNode,
  Dispatch,
  SetStateAction,
  KeyboardEvent,
  useRef,
  useId,
} from "react";
import styled from "styled-components";
import { RadioSizeType, RadioPositionType } from "./Radio.types";
import { RadioItemProps } from "./RadioItem";
import { HelpMessage, theme } from "@/css";

type RadioGroupProps = {
  children: ReactNode;
  value: string | undefined;
  onChange: Dispatch<SetStateAction<string | undefined>>;
  size?: RadioSizeType;
  color?: string;
  position?: RadioPositionType;
};

const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  children,
  value,
  onChange,
  size = "md",
  color = theme.colors.grey.default,
  position = "left",
}) => {
  const id = useId();

  const radiosRef = useRef<HTMLButtonElement[]>([]);

  const sizes: Record<RadioSizeType, string> = {
    sm: theme.spacing[3.5],
    md: theme.spacing[4],
    lg: theme.spacing[5],
  };

  const radioSize = sizes[size];

  const getRadioItemId = (index: number) => `${id}-${index}`;
  const getRadioLabelId = (index: number) => `${getRadioItemId(index)}-label`;

  const enabledItemId: number | undefined = (() => {
    let enabledItem: number | undefined;
    Children.forEach(children, (child, index) => {
      if (!isValidElement<RadioItemProps>(child)) return;

      const { value: itemValue } = child.props;
      const isChecked = value === itemValue;

      if (isChecked) {
        enabledItem = index;
      }
    });
    return enabledItem;
  })();

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const currentIndex = radiosRef.current.findIndex((tab) => tab === document.activeElement);

    const enabledIndexs = radiosRef.current
      .map((radio, index) => {
        if (!radio.disabled) return index;
      })
      .filter((index) => index !== undefined);

    const first = enabledIndexs[0];
    const last = enabledIndexs[enabledIndexs.length - 1];

    const prev =
      currentIndex === first
        ? last
        : enabledIndexs[enabledIndexs.findIndex((option) => option === currentIndex) - 1];

    const next =
      currentIndex === last
        ? first
        : enabledIndexs[enabledIndexs.findIndex((option) => option === currentIndex) + 1];

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      if (prev !== undefined) {
        event.preventDefault();
        radiosRef.current[prev].focus();
      }
    }

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      if (next !== undefined) {
        event.preventDefault();
        radiosRef.current[next].focus();
      }
    }

    if (event.key === "Home") {
      if (first !== undefined) {
        event.preventDefault();
        radiosRef.current[first].focus();
      }
    }

    if (event.key === "End") {
      if (last !== undefined) {
        event.preventDefault();
        radiosRef.current[last].focus();
      }
    }
  };

  return (
    <UList
      role="radiogroup"
      onKeyDown={handleKeyDown}
      {...(enabledItemId !== undefined && {
        "aria-activedescendant": getRadioItemId(enabledItemId),
      })}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement<RadioItemProps>(child)) return;

        const { children, value: itemValue, disabled = false, helpMessage } = child.props;

        const isChecked = value === itemValue;

        return (
          <ItemList $position={position}>
            <RadioButton
              role="radio"
              type="button"
              id={getRadioItemId(index)}
              aria-checked={isChecked}
              aria-labelledby={getRadioLabelId(index)}
              onClick={() => onChange(itemValue)}
              disabled={disabled}
              $position={position}
              ref={(el) => {
                if (el) {
                  radiosRef.current[index] = el;
                }
              }}
              $isChecked={isChecked}
              $radioSize={radioSize}
              $color={color}
            />
            <LabelContainer
              htmlFor={getRadioItemId(index)}
              id={getRadioLabelId(index)}
              $position={position}
            >
              <StyledChildren $size={size}>{children}</StyledChildren>
              {helpMessage && <HelpMessage size={size}>{helpMessage}</HelpMessage>}
            </LabelContainer>
          </ItemList>
        );
      })}
    </UList>
  );
};

export { RadioGroup, type RadioGroupProps };

const UList = styled.ul`
  list-style: none;
`;

const ItemList = styled.li<{ $position: RadioPositionType }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  justify-content: ${({ $position }) =>
    $position === "left" ? "flex-start" : "space-between"};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  &:last-child {
    margin-bottom: 0;
  }
`;

const RadioButton = styled.button<{
  $position: RadioPositionType;
  $isChecked: boolean;
  $radioSize: string;
  $color: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $radioSize }) => $radioSize};
  height: ${({ $radioSize }) => $radioSize};
  border: 1px solid
    ${({ theme, $isChecked }) =>
      $isChecked ? theme.colors.grey.default : theme.tokens.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  :after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ $isChecked, $color }) => $isChecked && $color};
  }
  order: ${({ $position }) => ($position === "left" ? 1 : 2)};
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const LabelContainer = styled.label<{ $position: RadioPositionType }>`
  order: ${({ $position }) => ($position === "left" ? 2 : 1)};
`;

const StyledChildren = styled.span<{ $size: RadioSizeType }>`
  display: block;
  font-size: ${({ $size, theme }) => {
    const sizes: Record<RadioSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[$size];
  }};
`;
