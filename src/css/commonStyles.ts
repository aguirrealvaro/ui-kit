import styled from "styled-components";
import { CheckboxSizeType } from "@/components/Checkbox/Checkbox.types";
import { RadioSizeType } from "@/components/RadioGroup/Radio.types";
import { SwitchSizeType } from "@/components/Switch/Switch.types";

export const Wrapper = styled.div`
  max-width: 75rem; //1200px
  width: 90%;
  margin: 0 auto;
`;

type HelpTextSize = CheckboxSizeType | SwitchSizeType | RadioSizeType;

export const HelpText = styled.span<{ size: HelpTextSize }>`
  display: block;
  margin-top: ${({ size, theme }) => {
    const sizes: Record<HelpTextSize, string> = {
      sm: theme.spacing[1],
      md: theme.spacing[2],
      lg: theme.spacing[3],
    };
    return sizes[size];
  }};
  color: ${({ theme }) => theme.assets.textSecondary};
  font-size: ${({ size, theme }) => {
    const sizes: Record<HelpTextSize, string> = {
      sm: theme.typography.fontSizes.xs,
      md: theme.typography.fontSizes.sm,
      lg: theme.typography.fontSizes.md,
    };
    return sizes[size];
  }};
`;
