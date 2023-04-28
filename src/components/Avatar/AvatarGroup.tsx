import { FunctionComponent, Children, ReactNode, ReactElement, cloneElement } from "react";
import styled from "styled-components";
import { Avatar } from "./Avatar";
import { AvatarShapeType, AvatarSizeType } from "./Avatar.types";
import { theme } from "@/css";
import { Spacing } from "@/css/theme/spacing";

type AvatarGroupProps = {
  children: ReactNode;
  size?: AvatarSizeType;
  shape?: AvatarShapeType;
  max?: number;
};

export const AvatarGroup: FunctionComponent<AvatarGroupProps> = ({
  children,
  size = "md",
  shape = "circle",
  max,
}) => {
  const margins: Record<AvatarSizeType, Spacing> = {
    xs: 3,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 8,
    "2xl": 10,
    "3xl": 12,
  };

  const count = Children.count(children);
  const showRemaining = Boolean(max && max > 0 && count - max > 0);
  const remaining = count - (max || 0);

  const remainingAvatar = (() => {
    return cloneElement(<Avatar name={`+ ${remaining}`} shape={shape} />, {
      style: {
        marginLeft: `-${theme.spacing[margins[size]]}`,
        border: `2px solid ${theme.assets.bgPrimary}`,
      },
    });
  })();

  return (
    <Container>
      {Children.map(children, (child, index) => {
        const clonedChild = cloneElement(child as ReactElement, {
          style: {
            ...(index !== 0 && { marginLeft: `-${theme.spacing[margins[size]]}` }),
            border: `2px solid ${theme.assets.bgPrimary}`,
          },
        });

        const show = max ? index < max : true;

        if (!show) return null;

        return <>{clonedChild}</>;
      })}

      {showRemaining && remainingAvatar}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
