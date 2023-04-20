import { FunctionComponent, ReactNode } from "react";

export type RadioProps = {
  children: ReactNode;
  value: string;
};

export const Radio: FunctionComponent<RadioProps> = () => {
  return <div>Radio</div>;
};
