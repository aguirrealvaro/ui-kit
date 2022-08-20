import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu } from "@styled-icons/heroicons-outline/Menu";
import { Close } from "@styled-icons/ionicons-outline/Close";
import { StyledIcon } from "@/components";

export default {
  title: "Components/StyledIcon",
  component: StyledIcon,
} as ComponentMeta<typeof StyledIcon>;

export const Primary: ComponentStory<typeof StyledIcon> = () => {
  return (
    <div>
      <StyledIcon icon={Close} size="70" color="blue" />
      <StyledIcon icon={Menu} size="70" color="red" />
    </div>
  );
};
