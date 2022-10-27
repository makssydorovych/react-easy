import React from 'react';

import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

function App() {
    return (
        <div>
            <PageTitle title={"This is App"}/>
            <Rating value={2}/>
            <Accordion titleValue={"Accordion"}/>
            <Rating value={4}/>
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
