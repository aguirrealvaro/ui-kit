import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Bank2 } from "@styled-icons/bootstrap/Bank2";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import { List, ListItem, Icon } from "@/components";

export default {
  title: "Components/List",
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = () => {
  const startEnhacer = <Icon icon={Bank2} />;
  const endEnhacer = <Icon icon={ChevronRight} />;

  return (
    <List>
      <ListItem
        startEnhacer={startEnhacer}
        endEnhacer={endEnhacer}
        //onClick={() => console.log("item!")}
      >
        Item 1
      </ListItem>
      <ListItem startEnhacer={startEnhacer} endEnhacer={endEnhacer}>
        Item 2
      </ListItem>
      <ListItem startEnhacer={startEnhacer} endEnhacer={endEnhacer}>
        Item 3
      </ListItem>
    </List>
  );
};

export const Primary = Template.bind({});
