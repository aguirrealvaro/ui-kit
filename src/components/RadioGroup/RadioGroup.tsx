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
import { useTheme } from "@/hooks";

type RadioGroupProps = {
  children: ReactNode;
  radioGroupId: string;
  value: string | undefined;
  onChange: Dispatch<SetStateAction<string | undefined>>;
};

export const RadioGroup: FunctionComponent<RadioGroupProps> = ({
  children,
  radioGroupId,
  value,
  onChange,
}) => {
  const { theme } = useTheme();

  return (
    <UList role="radiogroup" aria-activedescendant="TO DO: id del radio activado">
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return;

        const { children, value: itemValue } = child.props as RadioProps;

        const getRadioItemId = (index: number) => `${radioGroupId}-${index}`;

        const isChecked = value === itemValue;
        const icon = isChecked ? RadioCircleMarked : RadioCircle;

        const labelId = `${radioGroupId}-label-${index}`;

        return (
          <li>
            <button
              role="radio"
              id={getRadioItemId(index)}
              aria-checked={isChecked}
              aria-labelledby={labelId}
              onClick={() => onChange(itemValue)}
            >
              <Icon icon={icon} color={theme.assets.primary} />
            </button>
            <label htmlFor={getRadioItemId(index)} id={labelId}>
              {children}
            </label>
          </li>
        );
      })}
    </UList>
  );
};

const UList = styled.ul`
  list-style: none;
`;
