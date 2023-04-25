import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";

export type RadioItemProps = {
  children: ReactNode;
  value: string;
  helpText?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const RadioItem: FunctionComponent<RadioItemProps> = () => {
  return <></>;
};
