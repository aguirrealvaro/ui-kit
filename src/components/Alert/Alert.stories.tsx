import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Alert } from "@/components";

export default {
  title: "Components/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const Primary: ComponentStory<typeof Alert> = () => {
  return (
    <div>
      <AlertWrapper>
        <Alert variant="default">Default</Alert>
      </AlertWrapper>
      <AlertWrapper>
        <Alert variant="positive">Positive</Alert>
      </AlertWrapper>
      <AlertWrapper>
        <Alert variant="warning">Warning</Alert>
      </AlertWrapper>
      <AlertWrapper>
        <Alert variant="negative">Negative</Alert>
      </AlertWrapper>
      <AlertWrapper>
        <Alert variant="neutral">Default</Alert>
      </AlertWrapper>
    </div>
  );
};

const AlertWrapper = styled.div`
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
