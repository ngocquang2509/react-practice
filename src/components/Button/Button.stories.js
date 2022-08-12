import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    handleClick: { action: "clicked" },
  }
};

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
  backgroundColor: "#fff",
};

export const Edit = Template.bind({});
Edit.args = {
  label: "Edit",
  backgroundColor: "#ffcf00",
}

export const Delete = Template.bind({});
Delete.args = {
  label: "Delete",
  backgroundColor: "#ff0000",
}
