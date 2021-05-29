import React, { useState } from 'react'

type AddTodoProp = {
    AddFn: (a: string) => void
}

const AddTodo = ({ AddFn }: AddTodoProp): JSX.Element => {
    const [todo, setTodo] = useState('')
    const submitFn = (e: React.FormEvent): void => {
        e.preventDefault()
        AddFn(todo)
        setTodo('')
    }
    return (
        <>
            <form
                onSubmit={submitFn}
                className="flex flex-row justify-between shadow my-2"
            >
                <input
                    className="p-2 m-2 w-9/12 placeholder-gray-500"
                    type="text"
                    placeholder="Add a Todo"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                />
                <input
                    className="p-2 cursor-pointer w-3/12"
                    type="submit"
                    value="Add Todo"
                />
            </form>
        </>
    )
}

export default AddTodo
