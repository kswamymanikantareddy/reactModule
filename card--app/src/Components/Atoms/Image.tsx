import React from 'react'
interface Props{
    url:string,
}
const Image = ({url}:Props) => {
  return (
    <img src={url} alt="not found" />
  )
}

export default Image