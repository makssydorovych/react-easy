import React, {useState} from 'react';

import './App.css';
import {Accordion} from "./components/Accordion";
import {RaitingValueType, Rating} from "./components/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";


function App() {
    let[ratingValue, setRatingValue] = useState<RaitingValueType>(0)
    let[accordionCollapsed, setAccordionCollapsed] = useState(false)
    let[switchOn, setSwitchOn] = useState(true)
    return (
        <div className={"app"}>
            <PageTitle title={"This is App"}/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <Rating value={ratingValue} onClick={(on) => setRatingValue(on)}/>
            <Accordion titleValue={"Accordion"} collapsed={accordionCollapsed} onChange={setAccordionCollapsed}/>
            <UncontrolledAccordion titleValue={"blabla"}/>

        </div>
    );
}

type PagePropsTitle = {
    title: string
}
function PageTitle(props: PagePropsTitle) {
    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default App;
