import { Box } from "@mui/material";
import TextVariant from "../../Atoms/Typography/TextVariants";
import Image from "../../Atoms/Image/Image";
interface Props{
    variant1:string,
    leftNum:string,
    variant2:string,
    rightNum:string,
}
const OrderSummery = ({variant1,leftNum,variant2,rightNum}:Props) => {
  return (
   <>
    <Box my={0} mx={0} py={0} px={0} display='flex' flex-flexDirection={'row'} alignItems='center' justifyContent={'center'} height='14px' marginTop={'16px'} marginBottom='16px'>
            <TextVariant color='' variant={variant1} children={leftNum}/>
            <Image url='./Assests/HorizontalLine.svg'/>
            <TextVariant color='' variant={variant2} children={rightNum}/>
        </Box>
   </>
  )
}

export default OrderSummery
