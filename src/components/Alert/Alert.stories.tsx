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
        <Alert variant="default" size="xs">
          Default extra mini
        </Alert>
      </AlertWrapper>
      <AlertWrapper>
        <Alert variant="positive" size="sm">
          Positive small
        </Alert>
      </AlertWrapper>
      <AlertWrapper>
        <Alert variant="warning" size="md">
          Warning medium
        </Alert>
      </AlertWrapper>
      <AlertWrapper>
        <Alert variant="negative" size="lg">
          Negative large
        </Alert>
      </AlertWrapper>
      <AlertWrapper>
        <Alert variant="neutral">Neutral default</Alert>
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
