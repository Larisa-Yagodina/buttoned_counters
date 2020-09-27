import React from 'react'
import {v4 as uuidv4} from 'uuid'

export default function Counters (props) {

   const counters = props.counters;
   const plusMinusById = props.plusMinusById;
   const openToEditById = props.openToEditById;
   const inputtedValue = props.inputtedValue;
   const setInputtedValue = props.setInputtedValue;
   const newInputtedValue = props.newInputtedValue;
   const cancelButton = props.cancelButton;
   const movePosition = props.movePosition;

    return (
        <div>
            {counters.map((el, i) =>
                <p key={el.id}>
                    {el.title}
                    {el.buttons.reverse().map(elm =>
                      <button onClick={() => plusMinusById(el.id, -elm)} key={uuidv4()}> {-elm} </button>
                    )}
                    {el.value}
                    {el.buttons.reverse().map(elm =>
                        <button onClick={() => plusMinusById(el.id, elm)} key={uuidv4()}> {'+' + elm}</button>
                    )}
                    {el.edit && <input onChange={(e) => setInputtedValue(e.target.value)} value={inputtedValue} placeholder='new value'/>}
                    {el.edit && <button onClick={() => newInputtedValue(el.id)}> Save </button>}
                    {el.edit && <button onClick={() => cancelButton(el.id)}> Cancel </button>}
                    <button onClick={() => openToEditById(el.id)}> Edit </button>
                    { i !== 0 && <button onClick={() => movePosition(i, i - 1)}> ↑ </button>}
                    { i !== counters.length - 1 && <button onClick={() => movePosition(i, i + 1)}> ↓ </button>}
                </p>

            )}
        </div>
    )

}