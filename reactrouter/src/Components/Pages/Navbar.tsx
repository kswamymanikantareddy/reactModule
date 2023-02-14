import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='nav'>
        <ul>
          <li> <Link to='/'>Home</Link></li>
           <li><Link to='/dashbord'>Dashbord</Link></li>
          <li> <Link to='/about'>About</Link></li>
         <li><Link to='/product'>Product</Link></li>
        </ul>
      
    </div>
  )
}
