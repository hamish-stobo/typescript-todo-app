import React, { useState } from 'react'

type TodoProps = {
    todo: string
    removeTodo: (a: string) => void
}

const Todo = ({ todo, removeTodo }: TodoProps): JSX.Element => {
    const [thisTodo, setThisTodo] = useState(todo)
    const [checked, setChecked] = useState(false)
    return (
        <div>
            <button type="button" onClick={() => setChecked(!checked)}>
                ✅
            </button>
            <input
                className={checked ? 'checked' : ''}
                type="text"
                value={thisTodo}
                onChange={(e) => setThisTodo(e.target.value)}
            />
            <button type="button" onClick={() => removeTodo(todo)}>
                ❌
            </button>
        </div>
    )
}

export default Todo
