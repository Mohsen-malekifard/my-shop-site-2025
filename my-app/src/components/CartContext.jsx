import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useTodo = () => {
    return useContext(TodoContext)
}

export const CartProvider = ({children}) => {
    const [todos, setTodos] = useState([]);
    const [newItem, setNewItem] = useState("");

    const addTodo = (todo) => {
        setTodos([...todos, {
            id: Date.now(),
            text: newTodo,
            completed: false
        }])
    }

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleComplete = (id) => {
        setTodos(todos.map(todo => {
            todo.id == id ? {...todo, completed: !todo.completed} : todo
        }))
    }

    return(
        <TodoContext.Provider value = {{todos, newItem, setNewItem, addTodo, handleDelete, handleComplete}}>
            {children}
        </TodoContext.Provider>
    )
}