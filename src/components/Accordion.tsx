import React from "react";

type AccordionPropsType = {
titleValue: string
}

export function Accordion(props: AccordionPropsType) {
    return (
        <>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>


        </>
    )
}
type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <>
            <h3>{props.title}</h3>
        </>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}