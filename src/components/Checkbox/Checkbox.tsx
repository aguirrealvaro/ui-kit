import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
import { Checkbox as CheckboxUnchecked } from "@styled-icons/boxicons-regular/Checkbox";
import { CheckboxChecked } from "@styled-icons/boxicons-solid/CheckboxChecked";
import styled from "styled-components";
import { hiddenStyles, theme } from "../App";
import { Icon } from "../Icon";
import { SIZES } from "./Checkbox.constants";
import { PositionType, SizeType } from "./Checkbox.types";

type CheckboxProps = {
  children?: ReactNode;
  checkboxSize?: SizeType;
  position?: PositionType;
};

export const Checkbox: FunctionComponent<
  CheckboxProps & InputHTMLAttributes<HTMLInputElement>
> = ({ children, checkboxSize = "sm", position = "right", checked, ...restProps }) => {
  const size = SIZES[checkboxSize];

  const icon = checked ? CheckboxChecked : CheckboxUnchecked;

  return (
    <label>
      <HiddenInput type="checkbox" checked={checked} {...restProps} />
      <Container>
        <Wrapper position={position}>
          <Icon icon={icon} color={theme.colors.blue} size={size} />
        </Wrapper>
        {children && <Label position={position}>{children}</Label>}
      </Container>
    </label>
  );
};

const HiddenInput = styled.input`
  ${hiddenStyles};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Wrapper = styled.div<{ position: PositionType }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
`;

const Label = styled.div<{ position: PositionType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
`;
