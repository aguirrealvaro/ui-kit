import styled from "styled-components";
import { CheckboxSizeType } from "@/components/Checkbox/Checkbox.types";
import { RadioSizeType } from "@/components/RadioGroup/Radio.types";
import { SwitchSizeType } from "@/components/Switch/Switch.types";

export const Wrapper = styled.div`
  max-width: 75rem; //1200px
  width: 90%;
  margin: 0 auto;
`;

type HelpMessageType = CheckboxSizeType | SwitchSizeType | RadioSizeType;

export const HelpMessage = styled.span<{ size: HelpMessageType }>`
  display: block;
  margin-top: ${({ size, theme }) => {
    const sizes: Record<HelpMessageType, string> = {
      sm: theme.spacing[1],
      md: theme.spacing[2],
      lg: theme.spacing[3],
    };
    return sizes[size];
  }};
  color: ${({ theme }) => theme.vars.textSecondary};
  font-size: ${({ size, theme }) => {
    const sizes: Record<HelpMessageType, string> = {
      sm: theme.typography.fontSizes.xs,
      md: theme.typography.fontSizes.sm,
      lg: theme.typography.fontSizes.md,
    };
    return sizes[size];
  }};
`;
