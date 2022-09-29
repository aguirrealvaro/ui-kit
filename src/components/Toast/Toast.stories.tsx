import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Toast } from "@/components";
import { useToast } from "@/hooks";

export default {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = () => {
  const toast = useToast();

  return <Button onClick={() => toast.open("This is a toast")}>Open toast</Button>;
};

export const Primary = Template.bind({});
