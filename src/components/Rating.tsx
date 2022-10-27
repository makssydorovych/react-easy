import React from "react";
type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {
    if (props.value === 2) {
        return (<div>
            <Star selected={true}></Star>
            <Star selected={true}></Star>
            <Star selected={false}></Star>
            <Star selected={false}></Star>
            <Star selected={false}></Star>
        </div>)
    }
    return <div>
        <Star selected={false}></Star>
        <Star selected={false}></Star>
        <Star selected={false}></Star>
        <Star selected={false}></Star>
        <Star selected={false}></Star>
    </div>

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