import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
import { RadioCircle } from "@styled-icons/boxicons-regular/RadioCircle";
import { RadioCircleMarked } from "@styled-icons/boxicons-regular/RadioCircleMarked";
import styled from "styled-components";
import { hiddenStyles, theme } from "../App";
import { Icon } from "../Icon";
import { SIZES } from "./Radio.constants";
import { PositionType, SizeType } from "./Radio.types";

type RadioProps = {
  children?: ReactNode;
  radioSize?: SizeType;
  position?: PositionType;
  color?: string;
};

export const Radio: FunctionComponent<RadioProps & InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  radioSize = "sm",
  position = "right",
  checked,
  color = theme.colors.blue,
  ...restProps
}) => {
  const size = SIZES[radioSize];

  const icon = checked ? RadioCircleMarked : RadioCircle;

  return (
    <label>
      <HiddenInput type="radio" checked={checked} {...restProps} />
      <Container>
        <Wrapper position={position}>
          <Icon icon={icon} color={color} size={size} />
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
