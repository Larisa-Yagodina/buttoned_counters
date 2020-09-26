import React, {useState} from 'react';
import './App.css';
import {v4 as uuidv4} from "uuid";
import ForInput from "./ForInput";
import Counters from "./Counters";


const initialCounters = [
    {id: '111', value: 10, buttons: [1,]},
    {id: '112', value: 20, buttons: [1, 2,]},
    {id: '113', value: 30, buttons: [1, 2, 3,]},
];


function App() {

    const [counters, setCounters] = useState(initialCounters)

    const countSumById = (id, value) => {
        const newCounters = counters.map((el) => {
            if (id === el.id) {
                return {...el, value: el.value + value};
            } else {
                return el;
            }
        })
        setCounters(newCounters)
    }

    const [inputValue, setInputValue] = useState('')
    const [inputButtons, setInputButtons] = useState('')

    const addCounter = (inputValue, inputButtons) => {
        const newArr = [];
        for (let i = 1; i <= inputButtons; i++){
            newArr.push(i);
        }
        const newCounters = [...counters, {id: uuidv4(), value: inputValue, buttons: newArr}];
        setCounters(newCounters);
        setInputButtons('')
        setInputValue('')
    }

    return (
        <div className="App">
            <h1>Buttoned Counters Version 2</h1>
            <hr />
                <ForInput
                    addCounter={addCounter}
                    inputValue={inputValue}
                    inputButtons={inputButtons}
                    setInputValue={setInputValue}
                    setInputButtons={setInputButtons}
                />
                <hr />
                <Counters
                    counters={counters}
                    countSumById={countSumById}
                />
            <hr />
        </div>
    );
}

export default App;
