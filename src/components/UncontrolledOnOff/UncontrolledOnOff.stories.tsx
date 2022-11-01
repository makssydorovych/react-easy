import React, {useState} from "react";
import {UncontrolledOnOff, propsType} from "./OnOff";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Uncontrolled OnOff stories',
    component: UncontrolledOnOff
}
const callback = action("clicked")
const Template: Story<propsType> = (args) => <UncontrolledOnOff {...args} />;

export const OnMode= Template.bind({})
export const OffMode= Template.bind({})
OnMode.args = {
    defaultOn: true,
    onChange: callback,
}
OffMode.args = {
    defaultOff: false,
    onChange: callback,
}

// export const ModeChanging = () => {
//     let [value, setValue] = useState<boolean>(true)
//     return <UncontrolledOnOff on={value} onChange={setValue}/>
//
// }