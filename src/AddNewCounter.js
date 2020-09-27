import React from 'react'

export default function AddNewCounter (props) {

    const addNewCounter =props.addNewCounter;
    const newTitle = props.newTitle;
    const setNewTitle = props.setNewTitle;
    const newValue = props.newValue;
    const setNewValue = props.setNewValue;
    const newButtons = props.newButtons;
    const setNewButtons = props.setNewButtons;


    return (
        <div>
            <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} placeholder='new colour' type='text' />
            <input onChange={(e) => setNewValue(+e.target.value)} value={newValue} placeholder='new value' type='number' />
            <input onChange={(e) => setNewButtons(+e.target.value)} value={newButtons} placeholder='how much buttons' type='number'/>
            <button onClick={() => addNewCounter()}> Add new </button>
        </div>
    )

}