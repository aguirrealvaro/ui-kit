import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Infotip } from "@/components";

export default {
  title: "Components/Infotip",
  component: Infotip,
} as ComponentMeta<typeof Infotip>;

export const Primary: ComponentStory<typeof Infotip> = () => {
  const content = (
    <>
      content
      <br />
      content
      <br />
      content
      <br />
      content
      <br />
      content
      <br />
      content
      <br />
    </>
  );

  return <Infotip content={content} placement="right" size={25} />;
};
