import React from 'react'
import './text.css'

const Text=({props}) =>{
  return (
   <>
<div className='text'>
name:{props.name}
</div>

   </>
  )
}

export default Text;