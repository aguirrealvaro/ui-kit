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
    <Container>
      <SelectContainer value={value} onChange={onChange}>
        <option selected disabled>
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
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-block;
  font-size: 14px;
  color: #888;
  width: 100%;
  &::after {
    content: "";
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-top-color: #222;
    display: inline-block;
    border-radius: 2px;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`;

const SelectContainer = styled.select`
  display: block;
  font-size: 16px;
  width: 100%;
  min-height: 35px;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  outline: none;
  padding: 0 1rem;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
`;
