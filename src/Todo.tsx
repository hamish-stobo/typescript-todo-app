import React, { useState } from 'react'

type TodoProps = {
    todo: string
    removeTodo: (a: string) => void
}

const Todo = ({ todo, removeTodo }: TodoProps): JSX.Element => {
    const [thisTodo, setThisTodo] = useState(todo)
    const [checked, setChecked] = useState(false)
    return (
        <div className="my-2 flex flex-row justify-between items-stretch shadow">
            <button
                className="p-2 text-2xl w-2/12"
                type="button"
                onClick={() => setChecked(!checked)}
            >
                ✅
            </button>
            <input
                className={`p-2 w-8/12 text-center placeholder-gray-500 ${
                    checked ? 'line-through' : ''
                }`}
                type="text"
                value={thisTodo}
                onChange={(e) => setThisTodo(e.target.value)}
            />
            <button
                className="p-2 w-2/12 text-2xl"
                type="button"
                onClick={() => removeTodo(todo)}
            >
                ❌
            </button>
        </div>
    )
}

export default Todo
