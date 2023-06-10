import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MoreVertical } from "lucide-react";
import { DropdownMenuItem } from "./components";
import { DropdownMenu, Icon, IconButton } from "@/components";

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = ({ trigger: dummyTrigger, ...args }) => {
  const trigger = (
    <IconButton>
      <Icon icon={MoreVertical} />
    </IconButton>
  );

  /* return (
    <DropdownMenu trigger={trigger} {...args}>
      <DropdownMenuGroup>
        <DropdownMenuTitle>Title 1</DropdownMenuTitle>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
        <DropdownMenuItem>Item 3</DropdownMenuItem>
      </DropdownMenuGroup>
      <Separator spacing={1} />
      <DropdownMenuGroup>
        <DropdownMenuTitle>Title 2</DropdownMenuTitle>
        <DropdownMenuItem>Item 4</DropdownMenuItem>
        <DropdownMenuItem>Item 5</DropdownMenuItem>
        <DropdownMenuItem>Item 6</DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenu>
  ); */

  return (
    <DropdownMenu trigger={trigger} {...args}>
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuItem>Item 2</DropdownMenuItem>
      <DropdownMenuItem>Item 3</DropdownMenuItem>
      <DropdownMenuItem>Item 4</DropdownMenuItem>
      <DropdownMenuItem>Item 5</DropdownMenuItem>
      <DropdownMenuItem>Item 6</DropdownMenuItem>
    </DropdownMenu>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  position: "bottom",
  gap: 16,
  triggerMode: "click",
};
