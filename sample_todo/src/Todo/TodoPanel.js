import React from 'react'


const TodoPanel = ({filter}) => {

    return(
        <div>
            <button onClick={() =>  filter('ALL')}>ALL</button>
            <button onClick={() =>  filter('DONE')}>DONE</button>
            <button onClick={() =>  filter('TO DO')}>TO DO</button>
        </div>
    )
}

export default TodoPanel