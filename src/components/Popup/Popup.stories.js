import React from "react";
import Popup from "./Popup";

export default {
    title: "Popup",
    component: Popup,
}

const Template = (args) => <Popup {...args} />;
export const Default = Template.bind({});
Default.args = {
    title: "Popup",
    label: "Input",
}