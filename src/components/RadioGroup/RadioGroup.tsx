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
import { RadioNewSizeType } from "./Radio.types";
import { useTheme } from "@/hooks";

type RadioGroupProps = {
  children: ReactNode;
  radioGroupId: string;
  value: string | undefined;
  onChange: Dispatch<SetStateAction<string | undefined>>;
  size?: RadioNewSizeType;
  helpText?: ReactNode;
  color?: string;
};

export const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  children,
  radioGroupId,
  value,
  onChange,
  size = "md",
  helpText,
  color,
}) => {
  const { theme } = useTheme();

  const sizes: Record<RadioNewSizeType, string> = {
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
      {...(enabledItemId && { "aria-activedescendant": getRadioItemId(enabledItemId) })}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return;

        const { children, value: itemValue, disabled = false } = child.props as RadioProps;

        const isChecked = value === itemValue;
        const icon = isChecked ? RadioCircleMarked : RadioCircle;

        return (
          <ItemList>
            <RadioButton
              role="radio"
              id={getRadioItemId(index)}
              aria-checked={isChecked}
              aria-labelledby={getLabelId(index)}
              onClick={() => onChange(itemValue)}
              disabled={disabled}
            >
              <Icon
                icon={icon}
                color={disabled ? theme.assets.disabledBg : iconColor}
                size={radioSize}
              />
            </RadioButton>
            <LabelContainer htmlFor={getRadioItemId(index)} id={getLabelId(index)}>
              <StyledChildren size={size}>{children}</StyledChildren>
              <HelpText size={size}>{helpText}</HelpText>
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

const ItemList = styled.li`
  display: flex;
  align-items: center;
`;

const RadioButton = styled.button`
  &:disabled {
    cursor: not-allowed;
  }
`;

const LabelContainer = styled.label``;

const StyledChildren = styled.span<{ size: RadioNewSizeType }>`
  display: block;
  font-size: ${({ size, theme }) => {
    const sizes: Record<RadioNewSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[size];
  }};
`;

const HelpText = styled.span<{ size: RadioNewSizeType }>`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[3.5]};
  color: ${({ theme }) => theme.assets.textSecondary};
  font-size: ${({ size, theme }) => {
    const sizes: Record<RadioNewSizeType, string> = {
      sm: theme.typography.fontSizes.xs,
      md: theme.typography.fontSizes.sm,
      lg: theme.typography.fontSizes.md,
    };
    return sizes[size];
  }};
`;
