import React, {useState} from "react";
import {Accordion, AccordionPropsType, ItemType} from "./Accordion";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
}
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
 const onclickCallback = action("Accordion mode change event fired")
const onclick = action("onClick")
export const MenuCollapsedMode = Template.bind({});
 MenuCollapsedMode.args = {
     titleValue: "Menu",
     collapsed: true,
     onChange: onclickCallback,
     items: []
 }
export const UsersCollapsedMode = Template.bind({});
UsersCollapsedMode.args = {
    titleValue: "Users",
    collapsed: false,
    onChange: onclickCallback,
    items: [{title: "Alex", value: 1}, {title: "Tom", value: 2}, {title: "Anna", value: 3}, {title: "Viktor", value: 4}],
    onClick: onclick
}
export const ModeChanging = () => {
    const [value, setValue] = useState <boolean>(true)
    return <Accordion titleValue={"Users"} collapsed={value} onChange={()=> setValue(!value)}
                      items={[{title: "Alex", value: 1}, {title: "Tom", value: 2}, {title: "Anna", value: 3}, {title: "Viktor", value: 4}]}
    onClick={onclick}/>

}