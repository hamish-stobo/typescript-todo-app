import React, { useState } from 'react'

type TodoProps = {
    todo: string
    updateTodo: (type: string, content: string, index: number) => void
    idx: number
    checked: boolean
}

const Todo = ({ todo, updateTodo, idx, checked }: TodoProps): JSX.Element => {
    const [_todo, setTodo] = useState(todo)
    // update local state on change
    return (
        <div className="my-2 flex flex-row justify-between items-stretch shadow">
            <button
                className="p-2 text-2xl w-2/12"
                type="button"
                onClick={() => updateTodo('check', _todo, idx)}
            >
                ✅
            </button>
            <input
                className={`p-2 w-8/12 text-center placeholder-gray-500 ${
                    checked ? 'line-through' : ''
                }`}
                type="text"
                value={_todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                className="p-2 w-2/12 text-2xl"
                type="button"
                onClick={() => updateTodo('remove', _todo, idx)}
            >
                ❌
            </button>
        </div>
    )
}

export default Todo
