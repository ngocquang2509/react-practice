import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    handleClick: { action: "clicked" },
    bgColor: {control: "color" },
    textColor: {control: "color" },
  }
};

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
  bgColor: "#fff",
  textColor: "#000",
};

export const Edit = Template.bind({});
Edit.args = {
  label: "Edit",
  bgColor: "#ffcf00",
  textColor: "#000",
}

export const Delete = Template.bind({});
Delete.args = {
  label: "Delete",
  bgColor: "#ff0000",
  textColor: "#000",
}
