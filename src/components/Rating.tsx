import React, {useState} from "react";

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {

    const [star, setStar] = useState(props.value)
    return (<>
        <Star selected={props.value > 0}></Star> <button onClick={() => {setStar(true)}}>1</button>
        <Star selected={props.value > 1}></Star>  <button>2</button>
        <Star selected={props.value > 2}></Star><button>3</button>
        <Star selected={props.value > 3}></Star> <button>4</button>
        <Star selected={props.value > 4}></Star>  <button>5</button>
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