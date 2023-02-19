import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import BookCreate from "./components/BookCreate"
import BookList from './components/BookList'
// import BookShow from './components/BookShow'
let count = 0

export default function App() {
  const [books,setBooks] = useState([])

  const fecthBooks = async() => {
    const res = await axios.get('http://localhost:3001/books')

    setBooks(res.data)
  }

  useEffect(() =>{
    fecthBooks();
  },[])

  const editBook = async(id,title) => {

    const res = await axios.put(`http://localhost:3001/books/${id}`)

    const updateBook = books.map((book) => {
      if(book.id === id){

        return {...book,...res.data}
      }
      return book
    })
    return setBooks(updateBook)
  }

  const deleteBook = async(id,title) => {

    await axios.delete(`http://localhost:3001/books/${id}`)

    const updateBook = books.filter((book) => {
     return book.id !== id
    })
    setBooks(updateBook)
  }

  const createBook = async(title) => {

   const response = await axios.post('http://localhost:3001/books',{
      title
    })

    console.log(response);
    // count++
    const updateBook = [
      ...books,
    response.data
    ]
  
    setBooks(updateBook)
   
  }
  
  return (
    <div>
      <BookCreate createBook={createBook} />
      <BookList editBook={editBook} books={books} deleteBook={deleteBook} />
    </div>
  )
}
