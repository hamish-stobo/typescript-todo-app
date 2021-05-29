import React from 'react'

type TodoProps = {
    todo: string
    removeTodo: (a: string) => void
    updateTodo: (content: string, index: number) => void
    idx: number
    checked: boolean
    setChecked: (idx: number) => void
}

const Todo = ({
    todo,
    removeTodo,
    updateTodo,
    idx,
    checked,
    setChecked,
}: TodoProps): JSX.Element => {
    return (
        <div className="my-2 flex flex-row justify-between items-stretch shadow">
            <button
                className="p-2 text-2xl w-2/12"
                type="button"
                onClick={() => setChecked(idx)}
            >
                ✅
            </button>
            <input
                className={`p-2 w-8/12 text-center placeholder-gray-500 ${
                    checked ? 'line-through' : ''
                }`}
                type="text"
                value={todo}
                onChange={(e) => updateTodo(e.target.value, idx)}
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
