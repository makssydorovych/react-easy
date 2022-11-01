import React, {useState} from "react";
 export type propsType = {
    onChange: (on: boolean) => void
     defaultOn?: boolean
     defaultOff?: boolean
}

export function UncontrolledOnOff (props: propsType) {
    let [on, setOn] = useState(props.defaultOn ? props.defaultOff : false)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "white",
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "white" : "red",
    }
    const indicatorStyle={
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    }
    const onClicked =() =>{
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return(
      <div>
          <div style={onStyle} onClick={onClicked}>On</div>
          <div style={offStyle} onClick={offClicked}>Off</div>
          <div style={indicatorStyle}></div>
      </div>
    )
}