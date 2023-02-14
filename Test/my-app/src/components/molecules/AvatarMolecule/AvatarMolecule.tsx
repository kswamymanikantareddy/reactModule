import Image from "../../atoms/Image/Image"
import TextVariant from "../../atoms/TextVariants/TextVariants"
import Box from '@mui/material/Box';


interface Props{
    variant:any,
    children:string,
    url:string,
    color?:string
}

const AvatarMolecule = ({url,variant,children,color}:Props) => {
  return (
   <>
   <Box sx={{width: 96, height:18 , my:0,mx:0,py:0,px:0,display:'flex', flexDirection:'row'}}>
   <Image url={url}/>
   <TextVariant variant={variant} color={color} children={children}/>
   </Box>
   </>
  )
}

export default AvatarMolecule
