import { FunctionComponent, ReactNode } from "react";
import { AlertCircle } from "lucide-react";
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

const Alert: FunctionComponent<AlertProps> = ({
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

  return (
    <Container $colorScheme={colorScheme} $size={size} role="alert">
      {showIcon && (
        <Icon
          icon={AlertCircle}
          size={sizeIcons[size]}
          color={theme.colors[colorScheme].default}
        />
      )}
      <span>{children}</span>
    </Container>
  );
};

export { Alert, type AlertProps };

const Container = styled.div<{ $colorScheme: Colors; $size: AlertSizeType }>`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  ${({ $colorScheme, theme }) => {
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
    return variantStyles[$colorScheme];
  }};
  ${({ $size, theme }) => {
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
    return sizeStyles[$size];
  }};
`;
