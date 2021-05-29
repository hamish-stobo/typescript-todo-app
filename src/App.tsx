import React, { useState, useEffect, SetStateAction } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddTodo from './AddTodo'
import Todo from './Todo'

type todoItem = {
    checked: boolean
    todo: string
}

function App(): JSX.Element {
    const todoArr: todoItem[] = []
    const [todos, setTodos] = useState(todoArr)
    const AddFn = (todo: string): void => {
        setTodos([...todos, { checked: false, todo }])
    }
    const removeTodo = (todo: string): void => {
        setTodos(todos.filter((todoEl) => todoEl?.todo !== todo))
    }
    const updateTodo = (content: string, idx: number): void => {
        setTodos(
            todos.map((item: todoItem, _index: number) => {
                if (_index === idx) {
                    item.todo.replace(item.todo, content)
                    return item
                }
                return item
            })
        )
    }
    const setChecked = (idx: number): void => {
        setTodos(
            todos.map((item: todoItem, _index: number) => {
                if (_index === idx) {
                    return { ...item, checked: !item.checked }
                }
                return item
            })
        )
    }
    useEffect(() => {
        const todosFromStorage: string = localStorage.getItem('todos') || ''
        const todosFromStorageParsed =
            todosFromStorage && JSON.parse(todosFromStorage)
        if (todosFromStorage) {
            setTodos([...todos, ...todosFromStorageParsed])
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    return (
        <>
            <div className="flex flex-col justify-center align-center mx-auto w-80 mt-20">
                <h1 className="text-4xl my-4 text-center">Todo List</h1>
                <AddTodo AddFn={AddFn} />
                {todos.map((todo: todoItem, idx: number) => (
                    <Todo
                        key={uuidv4()}
                        todo={todo.todo}
                        checked={todo.checked}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                        idx={idx}
                        setChecked={setChecked}
                    />
                ))}
            </div>
        </>
    )
}

export default App
