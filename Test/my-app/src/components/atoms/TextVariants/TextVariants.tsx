import { Typography } from "@mui/material"

interface typographyProps{
    children:string,
    variant:any,
    color?:string
}

const TextVariant = ({variant,children,color}:typographyProps) => {
    return (
     <>
     <Typography variant={variant} color={color}>
        {children}
     </Typography>
     </>
    )
  }
  
  export default TextVariant
  