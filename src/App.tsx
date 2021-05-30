import React, { useState, useEffect } from 'react'
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
        setTodos([{ checked: false, todo }, ...todos])
    }
    const updateTodo = (type: string, content: string, idx: number): void => {
        const newArr = todos.map((item: todoItem, _index: number) => {
            if (_index === idx) {
                console.log(`item: ${item} content: ${content}`)
                item.todo.replace(item.todo, content)
                return item
            }
            return item
        })
        switch (type) {
            case 'check':
                setTodos(
                    newArr.map((item: todoItem, _index: number) => {
                        if (_index === idx) {
                            return { ...item, checked: !item.checked }
                        }
                        return item
                    })
                )
                break
            case 'remove':
                setTodos(
                    newArr.filter((todoEl: todoItem, _idx: number) => {
                        return _idx !== idx
                    })
                )
                break
            default:
                setTodos(newArr)
        }
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
                {console.log(todos)}
                <h1 className="text-4xl my-4 text-center">Todo List</h1>
                <AddTodo AddFn={AddFn} />
                {todos.map((todo: todoItem, idx: number) => (
                    <Todo
                        key={uuidv4()}
                        todo={todo.todo}
                        checked={todo.checked}
                        updateTodo={updateTodo}
                        idx={idx}
                    />
                ))}
            </div>
        </>
    )
}

export default App
