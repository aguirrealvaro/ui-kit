import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar, AvatarGroup } from "@/components";

export default {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = (args) => {
  return (
    <AvatarGroup {...args}>
      <Avatar src="https://bit.ly/dan-abramov" name="Dan Abramov" />
      <Avatar src="https://bit.ly/dan-abramov" name="Dan Abramov" />
      <Avatar src="https://bit.ly/dan-abramov" name="Dan Abramov" />
      <Avatar src="https://bit.ly/dan-abramov" name="Dan Abramov" />
    </AvatarGroup>
  );
};

export const Primary = Template.bind({});
