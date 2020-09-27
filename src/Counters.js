import React from 'react'
import {v4 as uuidv4} from 'uuid'

export default function Counters (props) {

    const counters = props.counters;
    const plusAndMinus = props.plusAndMinus;
    const savedNewCounter= props.savedNewCounter;
    const setSavedNewCounter=props.setSavedNewCounter;
    const editOrNotById=props.editOrNotById;
    const changeCounter=props.changeCounter;

    return (
        <div>
            {counters.map((el, i) =>
                <p key={el.id}>
                    {el.buttons.reverse().map((elm) =>
                        <button onClick={() => plusAndMinus(el.id, -elm)} key={uuidv4()}> {-elm} </button>
                    )}
                    {el.counter}
                    {el.buttons.reverse().map(elm =>
                        <button onClick={() => plusAndMinus(el.id, elm)} key={uuidv4()}> {'+' + elm} </button>
                    )}
                    { el.edit && <input onChange={(e) => setSavedNewCounter(+e.target.value)} value={savedNewCounter} placeholder='new value'/>}
                    { el.edit && <button onClick={() => changeCounter(el.id)}> Save </button>}
                    { el.edit && <button onClick={() => editOrNotById(el.id, false)} > Cancel </button>}
                    <button onClick={() => editOrNotById(el.id, true)}> Edit </button>
                </p>
              )}
        </div>
    )

}