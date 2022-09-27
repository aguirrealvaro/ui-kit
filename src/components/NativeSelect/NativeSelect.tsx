import { FunctionComponent, SelectHTMLAttributes } from "react";
import styled from "styled-components";
import { NativeSelectFieldType } from "./NativeSelect.types";

type NativeSelectProps = {
  options: NativeSelectFieldType[];
};

export const NativeSelect: FunctionComponent<
  NativeSelectProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">
> = ({ value, onChange, options, placeholder }) => {
  console.log(value);

  return (
    <div>
      <SelectContainer value={value} onChange={onChange}>
        <option selected value={undefined}>
          {placeholder}
        </option>
        {options.map(({ label, value, disabled }) => {
          return (
            <option value={value} disabled={disabled}>
              {label}
            </option>
          );
        })}
      </SelectContainer>
    </div>
  );
};

const SelectContainer = styled.select`
  appearance: none;
  outline: none;
  border: none;
  background: none;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border: 1px solid ${({ theme }) => theme.colors.grey[5]};
  padding: 1rem;
`;
