import React, {useState} from "react";

type RatingPropsType = {
    // value: number
}

export function Rating(props: RatingPropsType) {

    const [star, setStar] = useState(false)
    return (<>
        <Star selected={star}></Star> <button onClick={() => {setStar(!star)}}>1</button>
        <Star selected={star}></Star>  <button>2</button>
        <Star selected={star}></Star><button>3</button>
        <Star selected={star}></Star> <button>4</button>
        <Star selected={star}></Star>  <button>5</button>
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