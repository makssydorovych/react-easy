import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

export type AccordionPropsType = {
    titleValue: string

}



export function UncontrolledAccordion(props: AccordionPropsType) {
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <>
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
            {!state.collapsed && <AccordionBody/>}

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