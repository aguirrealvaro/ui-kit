import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "@/components";

export default {
  title: "Components/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const Primary: ComponentStory<typeof Alert> = () => {
  return <Alert>Alerta!!</Alert>;
};
