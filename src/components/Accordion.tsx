import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void

}

export function Accordion(props: AccordionPropsType) {


    return (
        <>
            <AccordionTitle title={props.titleValue} onClick={() => props.onChange(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody/>}

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
            <h3 onClick={() => {props.onClick()
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