import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
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
            <AddTodo AddFn={AddFn} />
            {todos.map((todo: string) => (
                <Todo key={uuidv4()} todo={todo} removeTodo={removeTodo} />
            ))}
        </>
    )
}

export default App
