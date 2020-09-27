import React, {useState} from 'react';
import './App.css';
import Counters from "./Counters";
import AddNewCounter from "./AddNewCounter";
import { v4 as uuidv4 } from 'uuid'
import GetSumma from "./GetSumma";

   const initialCounters = [
       {id: 1, title: 'Green', value: 10, buttons: [1], edit: false},
       {id: 2, title: 'Blue', value: 20, buttons: [1, 2], edit: false},
       {id: 3, title: 'Pink', value: 30, buttons: [1, 2, 3], edit: false},

   ]

function App() {

    const [counters, setCounters] = useState(initialCounters)

    const plusMinusById = (id, number) => {
        const newCounters = counters.map(el => {
            if (el.id === id) {
                return {...el, value: el.value + number}
            } else {
                return el;
            }
        })
        newCounters.sort((a, b) => a.value - b.value)
        setCounters(newCounters)
        setSumma('')
    }

    const [newTitle, setNewTitle] = useState('')
    const [newValue, setNewValue] = useState('')
    const [newButtons, setNewButtons] = useState('')

    const addNewCounter = () => {
        const buttonsArr = [];
        for (let i = 1; i <= newButtons; i++){
            buttonsArr.push(i);
        }
        const newCounters = [...counters, {id: uuidv4(), title: newTitle, value: newValue, buttons: buttonsArr, edit: false}];
        newCounters.sort((a, b) => a.value - b.value)
        setCounters(newCounters)
        setNewTitle('')
        setNewValue('')
        setNewButtons('')
        setSumma('')
    }

    const openToEditById = (id) => {
        const newCounters = counters.map(el => {
            if (el.id === id) {
                return {...el, edit: true}
            } else {
                return el;
            }
        })
        setCounters(newCounters)
    }

    const [inputtedValue, setInputtedValue] = useState('')

    const newInputtedValue = (id) => {
        const newCounters = counters.map(el => {
            if (el.id === id) {
                return {...el, value: inputtedValue, edit: false}
            } else {
                return el;
            }
        })
        setInputtedValue('')
        setCounters(newCounters)
        setSumma('')
    }

    const cancelButton = (id) => {
        const newCounters = counters.map(el => {
            if (el.id === id) {
                return {...el, edit: false}
            } else {
                return el;
            }
        })
        setCounters(newCounters)
    }

    const movePosition = (index, newIndex) => {
        const newCounters = [...counters];
        const temp = newCounters[index];
        newCounters[index] = newCounters[newIndex];
        newCounters[newIndex] = temp;
        setCounters(newCounters)
    }

    const [summa, setSumma] = useState(60)

    const getSumma = () => {
        let sum = 0;
        for (let el of counters) {
            sum += el.value;
        }
        setSumma(sum)
    }

    return (
        <div className="App">
            <h1>Counters Version 4</h1>
            <hr />
            <AddNewCounter
                addNewCounter={addNewCounter}
                newTitle={newTitle}
                setNewTitle={setNewTitle}
                newValue={newValue}
                setNewValue={setNewValue}
                newButtons={newButtons}
                setNewButtons={setNewButtons}
            />
            <hr />
            <Counters
                counters={counters}
                plusMinusById={plusMinusById}
                openToEditById={openToEditById}
                inputtedValue={inputtedValue}
                setInputtedValue={setInputtedValue}
                newInputtedValue={newInputtedValue}
                cancelButton={cancelButton}
                movePosition={movePosition}
            />
            <hr />
            <GetSumma
                summa={summa}
                getSumma={getSumma}
            />
            <hr />
        </div>
    );
}

export default App;
