import React, {useReducer, useState} from "react";

export type AccordionPropsType = {
    titleValue: string

}
type ActionType = {
    type: string
}
const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"
const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT :
            return !state;

        default:
            return state;
    }
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, dispatch] = useReducer(reducer, false)

    return (
        <>
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_CONSTANT})}/>
            {!collapsed && <AccordionBody/>}

        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <>
            <h3 onClick={() => {
                props.onClick()
            }}>{props.title}</h3>
        </>
    )
}


function AccordionBody() {

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}