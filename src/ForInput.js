import React from "react";

export default function ForInput (props) {

    const setInputValue = props.setInputValue;
    const setInputButtons = props.setInputButtons;
    const inputValue = props.inputValue;
    const inputButtons = props.inputButtons;
    const addCounter = props.addCounter;

    return (
        <div>
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder='input counter' />
            <input onChange={(e) => setInputButtons(e.target.value)} value={inputButtons} placeholder='input number of buttons' />
            <button onClick={() => addCounter(+inputValue, inputButtons)}> Add new</button>
        </div>
    )
}