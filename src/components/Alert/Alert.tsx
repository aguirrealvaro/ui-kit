import { FunctionComponent, ReactNode } from "react";
import { Info, AlertCircle, CheckCircle2, XCircle, LucideIcon } from "lucide-react";
import styled, { css, RuleSet } from "styled-components";
import { AlertSizeType } from "./Alert.types";
import { Icon } from "@/components";
import { theme } from "@/css";
import { Colors } from "@/css/theme/colors";

type AlertProps = {
  children: ReactNode;
  colorScheme?: Colors;
  size?: AlertSizeType;
  showIcon?: boolean;
};

export const Alert: FunctionComponent<AlertProps> = ({
  children,
  colorScheme = "grey",
  size = "md",
  showIcon = true,
}) => {
  const sizeIcons: Record<AlertSizeType, number> = {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
  };

  const variantIcons: Record<Colors, { icon: LucideIcon; color: string }> = {
    grey: { icon: Info, color: theme.colors.grey.default },
    blue: { icon: Info, color: theme.colors.blue.default },
    green: { icon: CheckCircle2, color: theme.colors.green.default },
    yellow: { icon: AlertCircle, color: theme.colors.yellow.default },
    red: { icon: XCircle, color: theme.colors.red.default },
  };

  return (
    <Container colorScheme={colorScheme} size={size} role="alert">
      {showIcon && (
        <Icon
          icon={variantIcons[colorScheme].icon}
          size={sizeIcons[size]}
          color={variantIcons[colorScheme].color}
        />
      )}
      <span>{children}</span>
    </Container>
  );
};

const Container = styled.div<{ colorScheme: Colors; size: AlertSizeType }>`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  ${({ colorScheme, theme }) => {
    const variantStyles: Record<Colors, RuleSet<object>> = {
      grey: css`
        background-color: ${theme.colors.grey[200]};
        color: ${theme.colors.grey.default};
      `,
      blue: css`
        background-color: ${theme.colors.blue[100]};
        color: ${theme.colors.blue[800]};
      `,
      green: css`
        background-color: ${theme.colors.green[100]};
        color: ${theme.colors.green[800]};
      `,
      red: css`
        background-color: ${theme.colors.red[100]};
        color: ${theme.colors.red[800]};
      `,
      yellow: css`
        background-color: ${theme.colors.yellow[100]};
        color: ${theme.colors.yellow[800]};
      `,
    };
    return variantStyles[colorScheme];
  }};
  ${({ size, theme }) => {
    const sizeStyles: Record<AlertSizeType, RuleSet<object>> = {
      xs: css`
        padding: ${`${theme.spacing[2]} ${theme.spacing[3]}`};
        font-size: ${theme.typography.fontSizes.xs};
        gap: ${theme.spacing[2.5]};
      `,
      sm: css`
        padding: ${`${theme.spacing[3]} ${theme.spacing[4]}`};
        font-size: ${theme.typography.fontSizes.sm};
        gap: ${theme.spacing[3.0]};
      `,
      md: css`
        padding: ${`${theme.spacing[4]} ${theme.spacing[5]}`};
        font-size: ${theme.typography.fontSizes.md};
        gap: ${theme.spacing[3.5]};
      `,
      lg: css`
        padding: ${`${theme.spacing[5]} ${theme.spacing[6]}`};
        font-size: ${theme.typography.fontSizes.lg};
        gap: ${theme.spacing[4]};
      `,
    };
    return sizeStyles[size];
  }};
`;
