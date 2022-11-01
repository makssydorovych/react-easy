import React, {useState} from "react";
import {OnOff, OnOffPropsType} from "./OnOff";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff stories',
    component: OnOff
}
const callback = action("clicked")
const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />;

export const OnMode= Template.bind({})
export const OffMode= Template.bind({})
OnMode.args = {
    on: true,
    onChange: callback,
}
OffMode.args = {
    on: false,
    onChange: callback,
}
export const ModeChanging = () => {
    let [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue}/>

}