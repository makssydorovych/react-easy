import React from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select,
}
export const BaseExample = () =><Select value={"1"} onChange={action("value change")} items={[
    {value: "1", title: "City"},
    {value: "2", title: "City2"},
    {value: "3", title: "City3"}

]} />