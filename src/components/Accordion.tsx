import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string

}

export function Accordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true)

        return (
            <>
                <AccordionTitle title={props.titleValue} /> <button onClick={()=>{setCollapsed(false)}}>Toogle</button>
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