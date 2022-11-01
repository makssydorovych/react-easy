import React from "react";
import {UncontrolledAccordion, AccordionPropsType} from "./UncontrolledAccordion";
import {Story} from "@storybook/react";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}
const Template: Story<AccordionPropsType> = (args) => <UncontrolledAccordion {...args}/>


export const UsersCollapsedMode = Template.bind({});
UsersCollapsedMode.args = {
    titleValue: "Users",

}
export const ModeChanging = () => {

    return <UncontrolledAccordion titleValue={"Users"} />

}