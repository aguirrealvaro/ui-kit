import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ShowMore } from "@/components";

export default {
  title: "Components/ShowMore",
  component: ShowMore,
} as ComponentMeta<typeof ShowMore>;

const Template: ComponentStory<typeof ShowMore> = (args) => {
  return (
    <ShowMore {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit totam ea recusandae
      distinctio tenetur, illo magni asperiores assumenda temporibus vitae ipsam ratione sunt
      voluptate, cum possimus aliquid? Nobis, delectus quam? Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Impedit totam ea recusandae distinctio tenetur, illo magni
      asperiores assumenda temporibus vitae ipsam ratione sunt voluptate, cum possimus aliquid?
      Nobis, delectus quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
      totam ea recusandae distinctio tenetur, illo magni asperiores assumenda temporibus vitae
      ipsam ratione sunt voluptate, cum possimus aliquid? Nobis, delectus quam? Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Impedit totam ea recusandae distinctio
      tenetur, illo magni asperiores assumenda temporibus vitae ipsam ratione sunt voluptate,
      cum possimus aliquid? Nobis, delectus quam? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Impedit totam ea recusandae distinctio tenetur, illo magni asperiores
      assumenda temporibus vitae ipsam ratione sunt voluptate, cum possimus aliquid? Nobis,
      delectus quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit totam ea
      recusandae distinctio tenetur, illo magni asperiores assumenda temporibus vitae ipsam
      ratione sunt voluptate, cum possimus aliquid? Nobis, delectus quam? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Impedit totam ea recusandae distinctio tenetur, illo
      magni asperiores assumenda temporibus vitae ipsam ratione sunt voluptate, cum possimus
      aliquid? Nobis, delectus quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Impedit totam ea recusandae distinctio tenetur, illo magni asperiores assumenda
      temporibus vitae ipsam ratione sunt voluptate, cum possimus aliquid? Nobis, delectus
      quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit totam ea
      recusandae distinctio tenetur, illo magni asperiores assumenda temporibus vitae ipsam
      ratione sunt voluptate, cum possimus aliquid? Nobis, delectus quam? Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Impedit totam ea recusandae distinctio tenetur, illo
      magni asperiores assumenda temporibus vitae ipsam ratione sunt voluptate, cum possimus
      aliquid? Nobis, delectus quam?
    </ShowMore>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  minHeight: 200,
  showMoreLegend: "Show more",
  showLessLegend: "Show less",
};
