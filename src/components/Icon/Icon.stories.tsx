import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu } from "@styled-icons/heroicons-outline/Menu";
import { Close } from "@styled-icons/ionicons-outline/Close";
import { Icon } from "@/components";

export default {
  title: "Components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Primary: ComponentStory<typeof Icon> = () => {
  return (
    <div>
      <Icon icon={Close} size={70} color="blue" />
      <Icon icon={Menu} size={70} color="red" />
    </div>
  );
};
