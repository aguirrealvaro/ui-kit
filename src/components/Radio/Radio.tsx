import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
import { RadioCircle } from "@styled-icons/boxicons-regular/RadioCircle";
import { RadioCircleMarked } from "@styled-icons/boxicons-regular/RadioCircleMarked";
import styled, { css } from "styled-components";
import { hiddenStyles, theme } from "../App";
import { Icon } from "../Icon";
import { RADIO_SIZES } from "./Radio.constants";
import { RadioPositionType, RadioSizeType } from "./Radio.types";

type RadioProps = {
  children?: ReactNode;
  size?: RadioSizeType;
  position?: RadioPositionType;
  color?: string;
  disabled?: boolean;
};

export const Radio: FunctionComponent<
  RadioProps & Omit<InputHTMLAttributes<HTMLInputElement>, "size">
> = ({
  children,
  size = "sm",
  position = "right",
  checked,
  color = theme.colors.blue,
  disabled = false,
  ...restProps
}) => {
  const radioSize = RADIO_SIZES[size];

  const icon = checked ? RadioCircleMarked : RadioCircle;

  return (
    <label>
      <HiddenInput type="radio" checked={checked} disabled={disabled} {...restProps} />
      <Container disabled={disabled}>
        <Wrapper position={position}>
          <Icon icon={icon} color={disabled ? "#cecece" : color} size={radioSize} />
        </Wrapper>
        {children && <Label position={position}>{children}</Label>}
      </Container>
    </label>
  );
};

const HiddenInput = styled.input`
  ${hiddenStyles};
`;

const Container = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${({ disabled }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
        color: #cecece;
      `;
    }
  }}
`;

const Wrapper = styled.div<{ position: RadioPositionType }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
`;

const Label = styled.div<{ position: RadioPositionType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
`;
