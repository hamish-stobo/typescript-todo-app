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
            <form onSubmit={submitFn}>
                <input
                    type="text"
                    placeholder="Add a Todo"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                />
                <input type="submit" value="Add Todo" />
            </form>
        </>
    )
}

export default AddTodo
