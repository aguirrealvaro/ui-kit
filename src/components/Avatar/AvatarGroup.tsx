import { FunctionComponent, Children, ReactNode, ReactElement, cloneElement } from "react";
import styled from "styled-components";
import { useTheme } from "@/hooks";

type AvatarGroupProps = {
  children: ReactNode;
};

export const AvatarGroup: FunctionComponent<AvatarGroupProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <Container>
      {Children.map(children, (child) => {
        const clonedChild = cloneElement(child as ReactElement, {
          style: {
            marginLeft: "-16px",
            border: `3px solid ${theme.assets.bgPrimary}`,
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
