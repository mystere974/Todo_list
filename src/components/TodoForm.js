import {useState} from 'react'

function TodoForm() {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventdefault()
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="ajouter quoi faire"
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange} />
            <button className='todo-button'>Ajouter dans todo list</button>
        </form>
    )
}

export default TodoForm