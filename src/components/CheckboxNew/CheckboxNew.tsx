import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import { CheckCircle } from "@styled-icons/material-rounded/CheckCircle";
import { RadioButtonUnchecked } from "@styled-icons/material-rounded/RadioButtonUnchecked";
import { Icon } from "../Icon";
import { useTheme } from "@/hooks";

type CheckboxNewProps = {
  children: ReactNode;
  checked: boolean;
  onChange: () => void;
  checkboxId: string;
  color?: string;
};

export const CheckboxNew: FunctionComponent<
  CheckboxNewProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size" | "onChange">
> = ({ children, checked, onChange, disabled, color, checkboxId, ...restProps }) => {
  const { theme } = useTheme();

  const icon = checked ? CheckCircle : RadioButtonUnchecked;
  const iconColor = color || theme.assets.primary;

  const labelId = `${checkboxId}-label`;

  return (
    <div>
      <button
        type="button"
        role="checkbox"
        onClick={onChange}
        aria-checked={checked}
        id={checkboxId}
        aria-labelledby={labelId}
      >
        <Icon icon={icon} color={disabled ? theme.assets.disabledBg : iconColor} />
      </button>
      <label id={labelId} htmlFor={checkboxId}>
        {children}
      </label>
    </div>
  );
};
