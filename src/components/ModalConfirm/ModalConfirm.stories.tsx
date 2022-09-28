import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ModalConfirm, Button } from "@/components";

export default {
  title: "Components/ModalConfirm",
  component: ModalConfirm,
} as ComponentMeta<typeof ModalConfirm>;

export const Primary: ComponentStory<typeof ModalConfirm> = () => {
  const onConfirm = () => {
    // eslint-disable-next-line no-console
    console.log("Confirm");
  };

  return (
    <ModalConfirm
      header="Delete profile"
      content="Are you sure you want to delete?"
      onConfirm={onConfirm}
    >
      <Button variant="danger">Delete profile</Button>
    </ModalConfirm>
  );
};
