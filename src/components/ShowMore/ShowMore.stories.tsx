import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ShowMore } from "@/components";
import { useBoolean } from "@/hooks";

export default {
  title: "Components/ShowMore",
  component: ShowMore,
} as ComponentMeta<typeof ShowMore>;

const Template: ComponentStory<typeof ShowMore> = ({ isOpen: _, ...args }) => {
  const [showMore, setShowMore] = useBoolean();

  return (
    <div>
      <ShowMore isOpen={showMore} {...args}>
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
      </ShowMore>
      <Button onClick={setShowMore.toggle}>Show {showMore ? "Less" : "More"}</Button>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  minHeight: 200,
};
