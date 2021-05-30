import React from 'react'

type TodoProps = {
    todo: string
    updateTodo: (type: string, index: number) => void
    idx: number
    checked: boolean
}

const Todo = ({ todo, updateTodo, idx, checked }: TodoProps): JSX.Element => {
    return (
        <div className="my-2 flex flex-row justify-between items-stretch shadow">
            <button
                className="p-2 text-2xl w-2/12"
                type="button"
                onClick={() => updateTodo('check', idx)}
            >
                ✅
            </button>
            <p
                className={`p-2 w-8/12 text-center placeholder-gray-500 ${
                    checked ? 'line-through' : ''
                }`}
            >
                {todo}
            </p>
            <button
                className="p-2 w-2/12 text-2xl"
                type="button"
                onClick={() => updateTodo('remove', idx)}
            >
                ❌
            </button>
        </div>
    )
}

export default Todo
