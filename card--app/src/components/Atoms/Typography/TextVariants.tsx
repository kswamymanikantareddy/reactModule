import {Typography} from '@mui/material'

interface  TextTypes{
children:string,
variant:any,
color:any,
}


const TextVariant = ({variant,children,color}:TextTypes) => {
  return (
   <>
   <Typography color={color} variant={variant}>
   {children}
   </Typography>
   </>
  )
}

export default TextVariant
