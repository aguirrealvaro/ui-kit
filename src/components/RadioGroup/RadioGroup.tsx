import {
  FunctionComponent,
  Children,
  isValidElement,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { RadioCircle } from "@styled-icons/boxicons-regular/RadioCircle";
import { RadioCircleMarked } from "@styled-icons/boxicons-regular/RadioCircleMarked";
import styled from "styled-components";
import { Icon } from "../Icon";
import { RadioProps } from "./Radio";
import { RadioSizeType, RadioPositionType } from "./Radio.types";
import { useTheme } from "@/hooks";

type RadioGroupProps = {
  children: ReactNode;
  radioGroupId: string;
  value: string | undefined;
  onChange: Dispatch<SetStateAction<string | undefined>>;
  size?: RadioSizeType;
  color?: string;
  position?: RadioPositionType;
};

export const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  children,
  radioGroupId,
  value,
  onChange,
  size = "md",
  color,
  position = "left",
}) => {
  const { theme } = useTheme();

  const sizes: Record<RadioSizeType, string> = {
    sm: theme.spacing[6],
    md: theme.spacing[7],
    lg: theme.spacing[8],
  };

  const radioSize = sizes[size];

  const getRadioItemId = (index: number) => `${radioGroupId}-${index}`;
  const getLabelId = (index: number) => `${radioGroupId}-label-${index}`;

  const iconColor = color || theme.assets.primary;

  const enabledItemId: number | undefined = (() => {
    let enabledItem: number | undefined;
    Children.forEach(children, (child, index) => {
      if (!isValidElement(child)) return;

      const { value: itemValue } = child.props as RadioProps;
      const isChecked = value === itemValue;

      if (isChecked) {
        enabledItem = index;
      }
    });
    return enabledItem;
  })();

  return (
    <UList
      role="radiogroup"
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
        } = child.props as RadioProps;

        const isChecked = value === itemValue;
        const icon = isChecked ? RadioCircleMarked : RadioCircle;

        return (
          <ItemList position={position}>
            <RadioButton
              role="radio"
              id={getRadioItemId(index)}
              aria-checked={isChecked}
              aria-labelledby={getLabelId(index)}
              onClick={() => onChange(itemValue)}
              disabled={disabled}
              position={position}
            >
              <Icon
                icon={icon}
                color={disabled ? theme.assets.disabledBg : iconColor}
                size={radioSize}
              />
            </RadioButton>
            <LabelContainer
              htmlFor={getRadioItemId(index)}
              id={getLabelId(index)}
              position={position}
            >
              <StyledChildren size={size}>{children}</StyledChildren>
              {helpText && <HelpText size={size}>{helpText}</HelpText>}
            </LabelContainer>
          </ItemList>
        );
      })}
    </UList>
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

const HelpText = styled.span<{ size: RadioSizeType }>`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[3.5]};
  color: ${({ theme }) => theme.assets.textSecondary};
  font-size: ${({ size, theme }) => {
    const sizes: Record<RadioSizeType, string> = {
      sm: theme.typography.fontSizes.xs,
      md: theme.typography.fontSizes.sm,
      lg: theme.typography.fontSizes.md,
    };
    return sizes[size];
  }};
`;