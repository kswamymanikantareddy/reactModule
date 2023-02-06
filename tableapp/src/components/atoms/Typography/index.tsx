import React from 'react'
import Typography from '@mui/material/Typography';

interface Props{
  variant:any,
  children:string|number,
}

const TableCell = ({ variant,children}:Props) => {
  return (
    <>
    <Typography  variant = { variant}>{children}</Typography>
    </>
  )
}

export default TableCell
