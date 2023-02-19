import React, { useState } from 'react'
import BookEdit from './BookEdit'

export default function BookShow({book,deleteBook,editBook}) {
const [showEdit, setShowEdit] = useState(false)
  const handleDel = (e) => {
    deleteBook(book.id,book.title)
  }

  const handleEdit = (e) => {
    setShowEdit(!showEdit)
   
  }
  const handleSubmit = (id,title) => {
    setShowEdit(false)
    editBook(id,title)
  }

  let content = <h3>{book.title}</h3>
  if(showEdit){
    
     content = <BookEdit onSubmit={handleSubmit} editBook={editBook} book={book} />
  }
  return (
    <div>
      <div className="book-show">
      <img src={`https://picsum.photos/id/${book.id}/300/200`} alt="img" />
      {content}
      <div className='actions'>
      <button onClick={handleEdit} className='edit'>edit</button>
      <button className='delete' onClick={handleDel}>delete</button>
      </div>
      </div>
      </div>
  )
}
