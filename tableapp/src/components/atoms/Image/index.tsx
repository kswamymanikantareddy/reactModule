import React from 'react'
import './index.css'
interface Props{
    url:any,
    alt:string
}
const Avatar = ({url,alt}:Props) => {
  return (
    <div>
      <img src={url} alt={alt} className='image'/>
    </div>
  )
}

export default Avatar
