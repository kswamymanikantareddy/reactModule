import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Products() {
  return (
    <>
   <input type='text' placeholder='Type here'/>
   <div>
    <Link to='new'>
        New
    </Link>
    <br/>
    <Link to='featured'>
    Featured
    </Link>
   </div>
   <Outlet/>
   </>
  )
}
