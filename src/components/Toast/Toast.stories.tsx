import { FunctionComponent } from "react";
import { Button } from "@/components";
import { useToast } from "@/hooks";

export default {
  title: "Components/Toast",
};

export const Primary: FunctionComponent = () => {
  const toast = useToast();

  return <Button onClick={() => toast.open("This is a toast")}>Open toast</Button>;
};
