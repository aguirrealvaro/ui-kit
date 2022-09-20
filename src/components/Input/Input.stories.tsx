import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Search } from "@styled-icons/evaicons-solid/Search";
import { theme } from "../App";
import { Input, Icon } from "@/components";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Primary: ComponentStory<typeof Input> = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const clearValue = () => setValue("");

  const searchIcon = <Icon icon={Search} color={theme.colors.grey} size={20} />;

  return (
    <Input
      placeholder="Placeholder"
      onChange={onChange}
      value={value}
      helpText="Help text"
      clearValue={clearValue}
      icon={searchIcon}
    />
  );
};
