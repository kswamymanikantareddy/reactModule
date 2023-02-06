import React from 'react'
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
interface Props{
   url:string
}
const ImageAvatar = ({url}:Props) => {
  return (
<Avatar src={url} alt='not found'/>
  )
}

export default ImageAvatar