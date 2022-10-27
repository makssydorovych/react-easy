import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string

}

export function Accordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)

        return (
            <>
                <AccordionTitle title={props.titleValue} /> <button onClick={()=>{setCollapsed(!collapsed)}}>Toogle</button>
                {!collapsed && <AccordionBody/>}

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

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}