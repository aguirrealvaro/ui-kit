import { FunctionComponent, Children, ReactNode, ReactElement, cloneElement } from "react";
import styled from "styled-components";
import { AvatarSizeType } from "./Avatar.types";
import { Spacing } from "@/css/theme/spacing";
import { useTheme } from "@/hooks";

type AvatarGroupProps = {
  children: ReactNode;
  size?: AvatarSizeType;
};

export const AvatarGroup: FunctionComponent<AvatarGroupProps> = ({
  children,
  size = "md",
}) => {
  const { theme } = useTheme();

  const margins: Record<AvatarSizeType, Spacing> = {
    xs: 3,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 8,
    "2xl": 10,
    "3xl": 12,
  };

  return (
    <Container>
      {Children.map(children, (child, index) => {
        const clonedChild = cloneElement(child as ReactElement, {
          style: {
            ...(index !== 0 && { marginLeft: `-${theme.spacing[margins[size]]}` }),
            border: `2px solid ${theme.assets.bgPrimary}`,
          },
          props: {
            size,
          },
        });

        return <>{clonedChild}</>;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
