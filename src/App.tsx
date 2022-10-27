import React from 'react';

import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div className={"app"}>
            <PageTitle title={"This is App"}/>
            <OnOff />
            <OnOff />
            <Rating />
            <Accordion titleValue={"Accordion"} />
            <Accordion titleValue={"Accordion Two"} />
            <Rating />
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
