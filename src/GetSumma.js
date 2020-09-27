import React from 'react'

export default function GetSumma (props) {

    const summa = props.summa;
    const getSumma = props.getSumma;


    return (
        <div>
           <button onClick={getSumma}> Calculate SUM </button>   {summa}
        </div>
    )

}