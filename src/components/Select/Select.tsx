import React, {useState} from "react";

export type ItemType = {
    title: string,
    value: any
}
export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}
export function Select(props: SelectPropsType) {

    return (<div>
        <option value={props.value} onClick={props.onChange}>
            <select></select>
        </option>
    </div>
        )

}