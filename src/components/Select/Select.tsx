import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import styled, { css } from "styled-components";
import { LabelValue } from "./types";
import { Icon, Spinner } from "@/components";
import { theme } from "@/components/App";
import { useOnClickOutside } from "@/hooks";

const ANIMATION_TIME = 200;

type SelectProps = {
  placeholder: string;
  value: string | undefined;
  onChange: Dispatch<SetStateAction<string | undefined>>;
  options: LabelValue[];
  disabled?: boolean;
  helpText?: string;
  error?: string;
  isLoading?: boolean;
};

export const Select: FunctionComponent<SelectProps> = ({
  placeholder,
  value,
  onChange,
  options,
  disabled,
  helpText,
  error,
  isLoading,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeDropdown = useCallback(() => setIsOpen(false), []);

  useOnClickOutside({ ref: containerRef, callback: closeDropdown, prevent: !isOpen });

  useEffect(() => {
    if (value) closeDropdown();
  }, [value, closeDropdown]);

  const selectedValue = options.find((option) => option.value === value)?.label;

  const handleDropdown = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  return (
    <Container ref={containerRef}>
      <SelectContainer
        onClick={handleDropdown}
        disabled={disabled || false}
        hasValue={!!value}
        error={!!error}
      >
        <InnerContainer>
          {value && <Placeholder>{placeholder}</Placeholder>}
          <SelectedValue isSelected={!!selectedValue}>
            {selectedValue || placeholder}
          </SelectedValue>
        </InnerContainer>
        <SideContainer>
          {isLoading && <Spinner size="mini" />}
          <Chevron active={isOpen} icon="chevron_down" size="14px" color={theme.colors.grey} />
        </SideContainer>
      </SelectContainer>
      {isOpen && (
        <Dropdown>
          {options.map((option, i) => {
            const onClick = () => onChange(option.value);
            const isSelected = value === option.value;
            return (
              <Option
                key={i}
                onClick={onClick}
                disabled={option.disabled}
                isSelected={isSelected}
              >
                {option.label}
              </Option>
            );
          })}
        </Dropdown>
      )}
      {(helpText || error) && <BottomText error={!!error}>{error || helpText}</BottomText>}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const InnerContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  position: relative;
`;

const Placeholder = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.grey};
  position: absolute;
  top: 7px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const SelectContainer = styled.div<{ hasValue: boolean; error: boolean; disabled: boolean }>`
  display: flex;
  //align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  color: ${({ theme, hasValue }) => theme.colors[hasValue ? "black" : "grey"]};
  width: 100%;
  height: 55px;
  border: 1px solid ${({ theme, error }) => (error ? theme.colors.red : "rgba(0, 0, 0, 0.36)")};
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    ${Placeholder} {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  ${({ disabled }) => {
    if (disabled) {
      return css`
        background: #f3f3f3;
        border: 1px solid transparent;
        cursor: not-allowed;
      `;
    }
  }};
`;

const SelectedValue = styled.span<{ isSelected: boolean }>`
  position: absolute;
  height: ${({ isSelected }) => (isSelected ? "72%" : "100%")};
  bottom: 0;
  display: flex;
  align-items: center;
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 1;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  background: #fff;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11);
  border-radius: 8px;
  width: 100%;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  transform: translateY(5px);
`;

const Option = styled.button<{ isSelected: boolean }>`
  padding: 8px 12px;
  margin-bottom: 4px;
  text-align: left;
  &:last-child {
    margin-bottom: 0;
  }
  border-radius: 8px;
  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background-color: ${theme.colors.blue};
          color: ${theme.colors.white};
        `
      : css`
          &:hover {
            background-color: #e7e7e7;
          }
        `};

  &:disabled {
    background: none;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const BottomText = styled.div<{ error: boolean }>`
  font-size: 13px;
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ error, theme }) => theme.colors[error ? "red" : "grey"]};
`;

const SideContainer = styled.div`
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Chevron = styled(Icon)<{ active: boolean }>`
  transform: ${({ active }) => `rotate(${active ? "-180" : 0}deg)`};
  transition: transform ${ANIMATION_TIME}ms ease;
`;
