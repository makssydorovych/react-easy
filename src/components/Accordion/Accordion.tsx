import React from "react";
 export type ItemType = {
    title: string,
    value: any
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void

}

export function Accordion(props: AccordionPropsType) {


    return (
        <>
            <AccordionTitle title={props.titleValue} onChange={() => props.onChange(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}

        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <>
            <h3 onClick={() => {props.onChange()
            }}>{props.title}</h3>
        </>
    )
}
type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {

    return <ul>
        {props.items.map((i, index) => <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>

}