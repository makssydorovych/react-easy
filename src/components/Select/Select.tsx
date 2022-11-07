import React, {KeyboardEventHandler, useEffect, useState} from "react";
import styles from "./Select.module.css"

export type ItemType = {
    title: string,
    value?: any
}
export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredItem, setHoveredItem] = useState(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoverItem = props.items.find(i => i.value === hoveredItem)
    useEffect(
        () => {
            setHoveredItem(props.value);
        },
        [props.value]
    )
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }
    const onKeyUp = (e: any) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++)
                if (props.items[i].value === hoveredItem) {
                    const pretendentEl = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentEl) {
                        props.onChange(pretendentEl.value)
                        return;
                    }

                }
            if(!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if(e.key === "Enter" || e.key === "Escape"){
            setActive(false)
        }
    }

    return (
        <>
            <div className={styles.select} tabIndex={0} onKeyUp={onKeyUp}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}> {props.items.map(i =>
                        <div
                            onMouseEnter={() => {
                                setHoveredItem(i.value)
                            }}
                            className={styles.item + " " + (hoverItem === i ? styles.selected : " ")} key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}>
                            {i.title}
                        </div>
                    )}
                    </div>}
            </div>
        </>
    )

}