import { FunctionComponent } from "react";
import { Button } from "@/components";
import { useToast } from "@/hooks";

export default {
  title: "Components/Toast",
};

export const Primary: FunctionComponent = () => {
  const toast = useToast();

  return (
    <Button onClick={() => toast.open("Open toast", { duration: 1000 })}>Open toast</Button>
  );
};
