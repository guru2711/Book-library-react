
import { useState } from 'react'


export default function BookCreate({createBook}) {
    const [title, setTitle] = useState('')
    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createBook(title)
        setTitle('')
    }
  return (
    <div><div className='book-create'>
        <form onSubmit={handleSubmit}>
            <label className='title'>Title</label>
            <input className='input' value={title} onChange={handleChange} />
            <button className='button primary'>Create</button>
        </form>
        </div></div>
  )
}
