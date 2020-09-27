import React, {useState} from 'react';
import './App.css';
import Counters from "./Counters";
import AddNewCounter from "./AddNewCounter";
import {v4 as uuidv4} from 'uuid'


   const initialCounters = [
       {id: 1, counter: 10, buttons: [1, ], edit: false, },
       {id: 2, counter: 20, buttons: [1, 2,], edit: false, },
       {id: 3, counter: 30, buttons: [1, 2, 3,], edit: false, },
   ]



function App() {

    const [counters, setCounters] = useState(initialCounters)

    const plusAndMinus = (id, value) => {
        const newCounters = counters.map((el) => {
            if (id === el.id) {
                return {...el, counter: el.counter + value}
            } else return el;
        })
        setCounters(newCounters)
    }

    const [newCounter, setNewCounter] = useState('')
    const [newButtons, setNewButtons] = useState('')

    const addNewCounter = (counter, buttons) => {
        const newButtons = [];
        for (let i = 1; i <= buttons; i++) {
            newButtons.push(i)
        }
        const newCounters = [...counters, {id: uuidv4(), counter: counter, buttons: newButtons}]
        setCounters(newCounters)
        setNewCounter('')
        setNewButtons('')
    }

    const editOrNotById = (id, bool) => {
        const newCounters = counters.map(el => {
            if (el.id === id) {
                return {...el, edit: bool}
            } else {
                return el;
            }
        })
        setCounters(newCounters)
    }

    const [savedNewCounter, setSavedNewCounter] = useState('')

    const changeCounter = (id) => {
        const newCounters = counters.map(el => {
            if (el.id === id) {
                return {...el, counter: savedNewCounter, edit: false}
            } else {
                return el;
            }
        })
        setSavedNewCounter('')
        setCounters(newCounters)
    }

    return (
        <div className="App">
            <h1>Buttoned Counters Version 3</h1>
            <hr />
            <AddNewCounter
                newCounter={newCounter}
                setNewCounter={setNewCounter}
                addNewCounter={addNewCounter}
                newButtons={newButtons}
                setNewButtons={setNewButtons}
            />
            <hr />
            <Counters
                counters={counters}
                plusAndMinus={plusAndMinus}
                savedNewCounter={savedNewCounter}
                setSavedNewCounter={setSavedNewCounter}
                editOrNotById={editOrNotById}
                changeCounter={changeCounter}
            />

            <hr />

        </div>
    );
}

export default App;
