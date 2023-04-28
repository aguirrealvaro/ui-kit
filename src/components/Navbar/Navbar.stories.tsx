/* eslint-disable no-console */
import { FunctionComponent } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { Button, Navbar } from "@/components";

export default {
  title: "Components/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => {
  const mainItems = [
    { label: "Item 1", onClick: () => console.log("Click"), disabled: true },
    { label: "Item 2", onClick: () => console.log("Click") },
    { label: "Item 3", onClick: () => console.log("Click") },
    { label: "Item 4", onClick: () => console.log("Click"), show: false },
  ];

  const mobileItems = [
    { label: "Log in", onClick: () => console.log("Click"), show: false },
    { label: "Log out", onClick: () => console.log("Click") },
  ];

  return (
    <Navbar
      startEndhacer={<Logo />}
      endEnhacer={<SessionButtons />}
      mainItems={mainItems}
      mobileItems={mobileItems}
    />
  );
};

export const Primary = Template.bind({});

const Logo: FunctionComponent = () => <LogoContainer>LOGO</LogoContainer>;

const LogoContainer = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  letter-spacing: ${({ theme }) => theme.typography.letterSpacings.widest};
  text-transform: uppercase;
`;

const SessionButtons: FunctionComponent = () => {
  return (
    <SessionButtonContainer>
      <Button kind="outlined">Log In</Button>
      <Button>Register</Button>
    </SessionButtonContainer>
  );
};

const SessionButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
