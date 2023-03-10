import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";

export default {
	title: "Example/Button",
	component: Button,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
// Template.bind({}) is a standard JavaScript technique for making a copy of a function. We copy the Template so each exported story can set its own properties on it.

export const Primary = Template.bind({});
Primary.args = {
	text: "Primary Button",
	weight: 600,
	secondary: false,
	vertical: 7,
	horizontal: 7,
	width: "auto",
	padding: 14,
	backgroundColor: "#FA81B1",
};

Primary.storyName = "Primary button";

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, text: "Secondary Button", secondary: true, backgroundColor: "#F7E3EB" };

Secondary.storyName = "Secondary";

