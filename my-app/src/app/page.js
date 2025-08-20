import { useTodo } from "@/components/CartContext"


export default function Home() {
  const {todos, newItem, setNewItem, addTodo, handleDelete, handleComplete} = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newItem);
    setNewItem("");
  }

  return(
    <>
      <h1>Welcome to my Todo App</h1>
      <form onSubmit = {handleSubmit} >
        <input 
          placeholder = {"Enter the title your todo"}
          value = {newItem}
          onChange = {(e) => setNewItem(e.target.value)}
        />
        <button type = {"submit"} >Add todo</button>
      </form>

      <ul>
        {todos.map(todo => {
          <li key = {todo.id} >
            <h2>{todo.text}</h2>
            <button onClick = {() => handleDelete(todo.id)} >Delete</button>
            <button onClick = {() => handleComplete(todo.id)} >{todo.complete ? "Not Complete" : "Complete"}</button>

          </li>
        })}
      </ul>
    </>
  )
}