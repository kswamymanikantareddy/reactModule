import React from 'react'
import { Link } from 'react-router-dom'

export default function BookList() {
  return (
    <div>
     <Link to='/book'> <h1>Book List</h1></Link>
      <Link to='/book/1'>Book 1</Link>
      <Link to='/book/2'>Book 2</Link>
      <Link to='/book/3'>Book 3</Link>
      <Link to='/book/4'>Book 4</Link>
      
    </div>
  )
}
