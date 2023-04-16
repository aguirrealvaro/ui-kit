import { FunctionComponent } from "react";
//import styled from "styled-components";

export type TypographyProps = {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
};

export const withTypographyProps = <P extends TypographyProps>(
  WrappedComponent: FunctionComponent<P>
) => {
  /* const StyledWrappedComponent = styled(WrappedComponent)`
    background-color: red;
  `; */

  return (props: P) => {
    return <WrappedComponent {...props} />;
  };
};
