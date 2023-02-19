import React from 'react'
import BookShow from './BookShow'

export default function BookList({books,deleteBook,editBook}) {
   const renderBooks = books.map((book) => {
    return (
        <BookShow editBook={editBook} key={book.id} book={book} deleteBook={deleteBook}/>
    )
   })
  return (
    <div className='book-list'>{renderBooks}</div>
  )
}
