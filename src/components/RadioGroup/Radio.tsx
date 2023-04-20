import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";

export type RadioProps = {
  children: ReactNode;
  value: string;
  helpText?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Radio: FunctionComponent<RadioProps> = () => {
  return <></>;
};
