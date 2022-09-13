import { FunctionComponent } from "react";
import styled from "styled-components";
import { useToast } from "@/components";

export default {
  title: "Components/Toast",
};

export const Primary: FunctionComponent = () => {
  const toast = useToast();

  return (
    <Button onClick={() => toast.open("Open toast", { variant: "positive" })}>
      Open toast
    </Button>
  );
};

const Button = styled.button`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;
