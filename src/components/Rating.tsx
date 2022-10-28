import React, {useState} from "react";

type RatingPropsType = {
    // value: number
}

export function Rating(props: RatingPropsType) {

    const [value, setValue] = useState(0)
    return (<>
        <Star selected={value === 0}></Star> <button onClick={() => {setValue(+1    )}}>1</button>
        <Star selected={value > 1}></Star>  <button onClick={() => {setValue(+1    )}}>2</button>
        <Star selected={value > 2}></Star><button onClick={() => {setValue(+1    )}}>3</button>
        <Star selected={value > 3}></Star> <button onClick={() => {setValue(+1    )}}>4</button>
        <Star selected={value > 4}></Star>  <button onClick={() => {setValue(+1    )}}>5</button>
    </>)

}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }

}