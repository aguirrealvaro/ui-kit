import {
  FunctionComponent,
  Children,
  isValidElement,
  ReactNode,
  Dispatch,
  SetStateAction,
  cloneElement,
  ReactElement,
  KeyboardEvent,
  useRef,
} from "react";
import { RadioCircle } from "@styled-icons/boxicons-regular/RadioCircle";
import { RadioCircleMarked } from "@styled-icons/boxicons-regular/RadioCircleMarked";
import styled from "styled-components";
import { Icon } from "../Icon";
import { RadioSizeType, RadioPositionType } from "./Radio.types";
import { RadioItemProps } from "./RadioItem";
import { HelpText } from "@/css";
import { useTheme } from "@/hooks";

type RadioGroupProps = {
  children: ReactNode;
  id: string;
  value: string | undefined;
  onChange: Dispatch<SetStateAction<string | undefined>>;
  size?: RadioSizeType;
  color?: string;
  position?: RadioPositionType;
  label?: ReactNode;
};

export const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  children,
  id,
  value,
  onChange,
  size = "md",
  color,
  position = "left",
  label,
}) => {
  const { theme } = useTheme();

  const radiosRef = useRef<HTMLButtonElement[]>([]);

  const sizes: Record<RadioSizeType, string> = {
    sm: theme.spacing[6],
    md: theme.spacing[7],
    lg: theme.spacing[8],
  };

  const radioSize = sizes[size];

  const labelId = `${id}-label`;
  const getRadioItemId = (index: number) => `${id}-${index}`;
  const getRadioLabelId = (index: number) => `${getRadioItemId(index)}-label`;

  const iconColor = color || theme.assets.primary;

  const enabledItemId: number | undefined = (() => {
    let enabledItem: number | undefined;
    Children.forEach(children, (child, index) => {
      if (!isValidElement(child)) return;

      const { value: itemValue } = child.props as RadioItemProps;
      const isChecked = value === itemValue;

      if (isChecked) {
        enabledItem = index;
      }
    });
    return enabledItem;
  })();

  const labelComponent = (() => {
    if (!isValidElement(label)) return null;
    return cloneElement(label as ReactElement, { id: labelId });
  })();

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const currentIndex = radiosRef.current.findIndex((tab) => tab === document.activeElement);

    const first = 0;
    const last = radiosRef.current.length - 1;
    const prev = currentIndex === first ? last : currentIndex - 1;
    const next = currentIndex === last ? first : currentIndex + 1;

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      radiosRef.current[prev].focus();
    }

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      radiosRef.current[next].focus();
    }
  };

  const isLabelValidElement = isValidElement(label);

  return (
    <>
      {labelComponent}
      <UList
        role="radiogroup"
        {...(isLabelValidElement && { "aria-labelledby": labelId })}
        onKeyDown={handleKeyDown}
        {...(enabledItemId !== undefined && {
          "aria-activedescendant": getRadioItemId(enabledItemId),
        })}
      >
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return;

          const {
            children,
            value: itemValue,
            disabled = false,
            helpText,
          } = child.props as RadioItemProps;

          const isChecked = value === itemValue;
          const icon = isChecked ? RadioCircleMarked : RadioCircle;

          return (
            <ItemList position={position}>
              <RadioButton
                role="radio"
                type="button"
                id={getRadioItemId(index)}
                aria-checked={isChecked}
                aria-labelledby={getRadioLabelId(index)}
                onClick={() => onChange(itemValue)}
                disabled={disabled}
                position={position}
                ref={(el) => {
                  if (el) {
                    radiosRef.current[index] = el;
                  }
                }}
              >
                <Icon
                  icon={icon}
                  color={disabled ? theme.assets.disabledBg : iconColor}
                  size={radioSize}
                />
              </RadioButton>
              <LabelContainer
                htmlFor={getRadioItemId(index)}
                id={getRadioLabelId(index)}
                position={position}
              >
                <StyledChildren size={size}>{children}</StyledChildren>
                {helpText && <HelpText size={size}>{helpText}</HelpText>}
              </LabelContainer>
            </ItemList>
          );
        })}
      </UList>
    </>
  );
};

const UList = styled.ul`
  list-style: none;
`;

const ItemList = styled.li<{ position: RadioPositionType }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing[1]};
  align-items: center;
  justify-content: ${({ position }) => (position === "left" ? "flex-start" : "space-between")};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  &:last-child {
    margin-bottom: 0;
  }
`;

const RadioButton = styled.button<{ position: RadioPositionType }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
  &:disabled {
    cursor: not-allowed;
  }
`;

const LabelContainer = styled.label<{ position: RadioPositionType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
`;

const StyledChildren = styled.span<{ size: RadioSizeType }>`
  display: block;
  font-size: ${({ size, theme }) => {
    const sizes: Record<RadioSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[size];
  }};
`;
