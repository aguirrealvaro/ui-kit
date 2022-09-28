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
        <Alert variant="info" size="xs">
          Info extra mini
        </Alert>
      </AlertWrapper>
      <AlertWrapper>
        <Alert variant="success" size="sm">
          Success small
        </Alert>
      </AlertWrapper>
      <AlertWrapper>
        <Alert variant="warning" size="md">
          Warning medium
        </Alert>
      </AlertWrapper>
      <AlertWrapper>
        <Alert variant="danger" size="lg" showIcon={false}>
          Danger large without icon
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
