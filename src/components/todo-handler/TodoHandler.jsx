import React from 'react'
import './todo-handler.css'

function TodoHandler(props) {
    return (
        <> 
        <div className="handler">
            <h1>YOUR TODOS.</h1>
            <ul className="ui">
                {props.todo}
            </ul>
         </div>
        </>
    )
}

export default TodoHandler
