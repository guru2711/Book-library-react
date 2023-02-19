import React, { useState } from 'react'

export default function BookEdit({book,onSubmit}) {
const [ title,setTitle] = useState(book.title)
  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title);
    // editBook(book.id,title)
    onSubmit(book.id,title)
    // setTitle('')
  }
  return (
    <div>
      <div className='book-edit'>
        <form onSubmit={handleSubmit} >
          <label>Title</label>
          <input className='input' onChange={handleChange} value={title}/>
          <button className='button is-primary'>Save</button>
        </form>
      </div>
    </div>
  )
}
