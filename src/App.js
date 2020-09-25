import React, {useState} from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid'

function App() {

    const [counters, setCounters] = useState([
        {id: '11alks', val: 1, buttons: [1, 2, 3]},
        {id: '22alsk', val: 2, buttons: [1, 2, 3, 4]},
        {id: '33alsk', val: 3, buttons: [1, 2, 3, 4, 5]},
    ])

    const [counter, setCounter] = useState('')
    const inputCounter = (e) => {
        setCounter(e.target.value);
    }

    const [buttons, setButtons] = useState('')
    const inputButton = (e) => {
        setButtons(e.target.value)
    }


    const addNewCounter = () => {
        if (counter && buttons) {
            const newArr = [];
            for (let i = 1; i <= buttons; i++) {
                newArr.push(i)
            }
            const newCounter = [...counters, {id: uuidv4(), val: +counter, buttons: newArr}];
            setCounters(newCounter)
        }
        setCounter('')
        setButtons('')
    }

    const plusOrMinus = ((id, num) => {
        const newCounters = counters.map(el => {
            if (id === el.id) {
                return {...el, val: el.val + num};
            } else {
                return el;
            }
        })
        setCounters(newCounters)
    })


    return (
        <div className="App">
            <h1>Buttoned Counters</h1>
            <input onChange={inputCounter} value={counter} placeholder='Number'/>
            <input onChange={inputButton} value={buttons} placeholder='How many buttons'/>
            <button onClick={addNewCounter}> Add</button>

            {counters.map(el =>
                <p key={el.id}>
                    {el.buttons.map(elm =>
                        <button key={Math.random()} onClick={() => plusOrMinus(el.id, -elm)}> {-elm} </button>
                    )}
                    {el.val}
                    {el.buttons.map(elm =>
                        <button key={Math.random()} onClick={() => plusOrMinus(el.id, elm)}> {'+' + elm} </button>
                    )}
                </p>
            )}

        </div>
    );
}

export default App;
