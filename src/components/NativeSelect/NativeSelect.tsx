import { FunctionComponent, MouseEvent, ReactNode, SelectHTMLAttributes } from "react";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import styled from "styled-components";
import { Icon } from "../Icon";
import { NativeSelectFieldType } from "./NativeSelect.types";
import { useTheme } from "@/hooks";

type NativeSelectProps = {
  label?: ReactNode;
  options: NativeSelectFieldType[];
  clearValue?: () => void;
  helpText?: string;
  error?: string;
};

export const NativeSelect: FunctionComponent<
  NativeSelectProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">
> = ({
  value,
  onChange,
  options,
  placeholder,
  clearValue,
  label,
  disabled,
  helpText,
  error,
}) => {
  const { theme } = useTheme();

  const handleClearValue = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    clearValue?.();
  };

  const isSelected = !!value;

  const showBottom: boolean = !!helpText || !!error;

  return (
    <div>
      {label && <Label>{label}</Label>}
      <SelectContainer>
        <Select value={value} onChange={onChange} disabled={disabled} error={!!error}>
          <Option hidden>{placeholder}</Option>
          {options.map(({ label, value, disabled }, index) => {
            return (
              <Option value={value} disabled={disabled} key={index}>
                {label}
              </Option>
            );
          })}
        </Select>
        <SideContainer>
          {isSelected && clearValue && (
            <ButtonClear onClick={handleClearValue}>
              <Icon icon={CloseOutline} color={theme.assets["input-border"]} size={18} />
            </ButtonClear>
          )}
          <ChevronWrapper active={false}>
            <Icon icon={ChevronDown} color={theme.assets["input-border"]} size={23} />
          </ChevronWrapper>
        </SideContainer>
      </SelectContainer>
      {showBottom && <BottomText error={!!error}>{error || helpText}</BottomText>}
    </div>
  );
};

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  font-size: 16px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Select = styled.select<{ error: boolean }>`
  font-size: inherit;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.assets["body-background"]};
  color: ${({ theme }) => theme.assets["primary-text"]};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0 1rem;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  border: 1px solid transparent;
  border-color: ${({ theme, error }) => {
    if (error) {
      return theme.colors.red.base;
    }

    return theme.assets["input-border"];
  }};

  border-radius: ${({ theme }) => theme.borderRadius.sm};
  &:focus {
    border-color: transparent;
    box-shadow: ${({ theme }) => theme.shadows.outline};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.assets["disabled"]};
    color: ${({ theme }) => theme.assets["disabled-font"]};
    cursor: not-allowed;
  }
`;

const SideContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 1rem;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

const ChevronWrapper = styled.div<{ active: boolean }>`
  transform: ${({ active }) => `rotate(${active ? "-180" : 0}deg)`};
  transition: transform ${({ theme }) => theme.transitions.normal}ms ease;
  display: flex;
  align-items: center;
`;

const Option = styled.option`
  &:disabled {
    color: ${({ theme }) => theme.assets["disabled"]};
  }
`;

const ButtonClear = styled.button`
  line-height: 0;
`;

const BottomText = styled.div<{ error: boolean }>`
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ error, theme }) =>
    error ? theme.colors.red.base : theme.assets["secondary-text"]};
`;
