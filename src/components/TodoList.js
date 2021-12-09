import {useState} from 'react'
import TodoForm from './TodoForm'



function TodoList() {
    const [todos, setTodos] = useState([])
    return (
        <div>
            <h1>Quoi faire aujourd'hui?</h1>
            <TodoForm />
        </div>
    )
}

export default TodoList
