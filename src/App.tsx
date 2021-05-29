import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddTodo from './AddTodo'
import Todo from './Todo'

function App(): JSX.Element {
    const todoArr: string[] = []
    const [todos, setTodos] = useState(todoArr)
    const AddFn = (todo: string): void => {
        setTodos([...todos, todo])
    }
    const removeTodo = (todo: string): void => {
        setTodos(todos.filter((todoEl) => todoEl !== todo))
    }
    return (
        <>
            <div className="flex flex-col justify-center align-center mx-auto w-80 mt-20">
                <h1 className="text-4xl my-4 text-center">Todo List App</h1>
                <AddTodo AddFn={AddFn} />
                {todos.map((todo: string) => (
                    <Todo key={uuidv4()} todo={todo} removeTodo={removeTodo} />
                ))}
            </div>
        </>
    )
}

export default App
