import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardImage from "../../molecules/CardImage/CardImage";
import BookCaptions from "../../molecules/BookCaptions/BookCaptions";
import ButtonComponent from "../../atoms/Button/Button";

const BookCard = () => {
  return (
   <>
   <Card sx={{height:466,width:284,border:'1px solid #E1ECFC',borderRadius:2}}>
   <CardImage/>
   <BookCaptions/>
   <Box sx={{width:284, height:52,}}  >
   <ButtonComponent variant='contained' children='Add to library'/>
   </Box>
   </Card>
   </>
  )
}

export default BookCard
