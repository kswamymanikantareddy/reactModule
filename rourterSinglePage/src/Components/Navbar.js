import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='nav'>
        <ul className='navul'>
           <Link to='/'><li>Home</li></Link>
           <Link to='dashbord'><li>Dashbord</li></Link>
           <Link to='about'><li>About</li></Link>
         <Link to='product'><li>Product</li></Link>
        </ul>
      
    </div>
  )
}
