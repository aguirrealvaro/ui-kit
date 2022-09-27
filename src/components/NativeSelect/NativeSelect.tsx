import { FunctionComponent, SelectHTMLAttributes } from "react";
import { NativeSelectFieldType } from "./NativeSelect.types";

type NativeSelectProps = {
  options: NativeSelectFieldType[];
};

export const NativeSelect: FunctionComponent<
  NativeSelectProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">
> = ({ value, onChange, options, placeholder }) => {
  return (
    <div>
      <select value={value} onChange={onChange}>
        <option hidden selected>
          {placeholder}
        </option>
        {options.map(({ label, value, disabled }) => {
          return (
            <option value={value} disabled={disabled}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
