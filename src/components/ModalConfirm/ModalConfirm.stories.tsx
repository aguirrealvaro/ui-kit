import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ModalConfirm, Button } from "@/components";

export default {
  title: "Components/ModalConfirm",
  component: ModalConfirm,
} as ComponentMeta<typeof ModalConfirm>;

const Template: ComponentStory<typeof ModalConfirm> = (args) => {
  return (
    <ModalConfirm {...args}>
      <Button variant="danger">Delete profile</Button>
    </ModalConfirm>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  header: "Delete profile",
  content: "Are you sure you want to delete?",
  // eslint-disable-next-line no-console
  onConfirm: () => console.log("on Confirm"),
};
