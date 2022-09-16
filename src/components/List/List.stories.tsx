import { ComponentStory, ComponentMeta } from "@storybook/react";
import { List, ListItem } from "@/components";

export default {
  title: "Components/List",
  component: List,
} as ComponentMeta<typeof List>;

export const Primary: ComponentStory<typeof List> = () => {
  return (
    <List>
      <ListItem>level 1 item 1</ListItem>
      <ListItem>
        level 1 item 2
        <List nested>
          <ListItem>level 2 item 1</ListItem>
          <ListItem>level 2 item 2</ListItem>
          <ListItem>
            level 2 item 3
            <List nested>
              <ListItem>level 3 item 1 </ListItem>
              <ListItem>level 3 item 2</ListItem>
              <ListItem>level 3 item 3</ListItem>
            </List>
          </ListItem>
        </List>
      </ListItem>
      <ListItem>level 1 item 3</ListItem>
    </List>
  );
};
