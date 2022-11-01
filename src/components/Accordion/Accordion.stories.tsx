import React, {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
}
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
 const onclickCallback = action("Accordion mode change event fired")
export const MenuCollapsedMode = Template.bind({});
 MenuCollapsedMode.args = {
     titleValue: "Menu",
     collapsed: true,
     onChange: onclickCallback
 }
export const UsersCollapsedMode = Template.bind({});
UsersCollapsedMode.args = {
    titleValue: "Users",
    collapsed: false,
    onChange: onclickCallback
}
export const ModeChanging = () => {
    const [value, setValue] = useState <boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value} onChange={()=> setValue(!value)}/>

}