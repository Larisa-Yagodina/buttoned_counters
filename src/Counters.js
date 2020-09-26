import React from 'react'

export default function Counters(props){

    const counters = props.counters;
    const countSumById = props.countSumById;


    return (
             <div>
                 {counters.map(el =>
                     <p key={el.id}>
                         {el.buttons.reverse().map((elm, ind) =>
                             <button onClick={() => countSumById(el.id, -elm)} key={Math.random()}> {-elm} </button>
                         )}
                         &nbsp; {el.value} &nbsp;
                         {el.buttons.reverse().map(elm =>
                             <button onClick={() => countSumById(el.id, elm)} key={Math.random()}> {'+' + elm} </button>
                         )}
                     </p>

                 )}



             </div>
            )
}