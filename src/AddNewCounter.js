import React from 'react'

export default function AddNewCounter (props) {

    const newCounter = props.newCounter;
    const setNewCounter = props.setNewCounter;
    const newButtons = props.newButtons;
    const setNewButtons = props.setNewButtons;
    const addNewCounter = props.addNewCounter;


    return (
        <div>
            <input onChange={(e) => setNewCounter(+e.target.value)} value={newCounter} placeholder='new counter'/>
            <input onChange={(e) => setNewButtons(+e.target.value)} value={newButtons} placeholder='how much buttons'/>
            <button onClick={() => addNewCounter(newCounter, newButtons)}> Add </button>
        </div>
    )

}