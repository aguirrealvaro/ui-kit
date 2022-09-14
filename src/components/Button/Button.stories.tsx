import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@/components";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => {
  return (
    <div>
      <div>
        <Button kind="solid">Solid</Button>
        <Button kind="outlined">Outlined</Button>
        <Button kind="ghost">Ghost</Button>
      </div>
      <div>
        <Button size="mini">Mini</Button>
        <Button size="compact">Compact</Button>
        <Button size="default">Default</Button>
        <Button size="large">Large</Button>
      </div>
      <div>
        <Button variant="default">Default</Button>
        <Button variant="positive">Positive</Button>
        <Button variant="negative">Negative</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="neutral">Neutral</Button>
      </div>
      <div>
        <Button kind="ghost" variant="default">
          Default
        </Button>
        <Button kind="ghost" variant="positive">
          Positive
        </Button>
        <Button kind="ghost" variant="negative">
          Negative
        </Button>
        <Button kind="ghost" variant="warning">
          Warning
        </Button>
        <Button kind="ghost" variant="neutral">
          Neutral
        </Button>
      </div>
      <div>
        <Button variant="default" kind="outlined">
          Default
        </Button>
        <Button variant="positive" kind="outlined">
          Positive
        </Button>
        <Button variant="negative" kind="outlined">
          Negative
        </Button>
        <Button variant="warning" kind="outlined">
          Warning
        </Button>
        <Button variant="neutral" kind="outlined">
          Neutral
        </Button>
      </div>
      <div>
        <Button shape="default">Default</Button>
        <Button shape="pill">Pill</Button>
        <Button shape="circle">Circle</Button>
        <Button shape="rectangle">Rectangle</Button>
      </div>
    </div>
  );
};
