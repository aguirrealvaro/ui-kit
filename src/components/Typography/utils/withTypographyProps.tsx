import { FunctionComponent } from "react";

export type TypographyProps = {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
};

export const withTypographyProps = <P extends TypographyProps>(
  WrappedComponent: FunctionComponent<P>
) => {
  return (props: P) => {
    const { fontSize } = props;
    console.log("withTypographyProps");
    console.log(fontSize);

    return <WrappedComponent style={{ backgroundColor: "red" }} {...props} />;
  };
};
