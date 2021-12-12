import {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventdefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="ajouter quoi faire"
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange} />
            <button onClick={handleSubmit} className='todo-button'>Ajouter dans todo list</button>
        </form>
    )
}

export default TodoForm
