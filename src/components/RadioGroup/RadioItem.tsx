import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";

type RadioItemProps = {
  children: ReactNode;
  value: string;
  helpMessage?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const RadioItem: FunctionComponent<RadioItemProps> = () => {
  return <></>;
};

export { RadioItem, type RadioItemProps };
