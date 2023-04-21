import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Collapse } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/Collapse",
  component: Collapse,
} as ComponentMeta<typeof Collapse>;

const Template: ComponentStory<typeof Collapse> = ({ isOpen: _, ...args }) => {
  const [showMore, setShowMore] = useBoolean();

  return (
    <div>
      <Collapse isOpen={showMore} {...args}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit totam ea recusandae
        distinctio tenetur, illo magni asperiores assumenda temporibus vitae ipsam ratione sunt
        voluptate, cum possimus aliquid? Nobis, delectus quam? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Impedit totam ea recusandae distinctio tenetur, illo
        magni asperiores assumenda temporibus vitae ipsam ratione sunt voluptate, cum possimus
        aliquid? Nobis, delectus quam? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Impedit totam ea recusandae distinctio tenetur, illo magni asperiores assumenda
        temporibus vitae ipsam ratione sunt voluptate, cum possimus aliquid? Nobis, delectus
        quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit totam ea
        recusandae distinctio tenetur, illo magni asperiores assumenda temporibus vitae ipsam
        ratione sunt voluptate, cum possimus aliquid? Nobis, delectus quam? Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Impedit totam ea recusandae distinctio tenetur,
        illo magni asperiores assumenda temporibus vitae ipsam ratione sunt voluptate, cum
        possimus aliquid? Nobis, delectus quam? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Impedit totam ea recusandae distinctio tenetur, illo magni asperiores
        assumenda temporibus vitae ipsam ratione sunt voluptate, cum possimus aliquid? Nobis,
        delectus quam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit totam
        ea recusandae distinctio tenetur, illo magni asperiores assumenda temporibus vitae
        ipsam ratione sunt voluptate, cum possimus aliquid? Nobis, delectus quam? Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Impedit totam ea recusandae distinctio
        tenetur, illo magni asperiores assumenda temporibus vitae ipsam ratione sunt voluptate,
        cum possimus aliquid? Nobis, delectus quam? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Impedit totam ea recusandae distinctio tenetur, illo magni asperiores
        assumenda temporibus vitae ipsam ratione sunt voluptate, cum possimus aliquid? Nobis,
      </Collapse>
      <Button onClick={setShowMore.toggle}>Show {showMore ? "Less" : "More"}</Button>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  startingHeight: 200,
};
