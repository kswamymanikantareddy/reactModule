import styled from 'styled-components'
import ImageAvatar from '../Atoms/imageAvatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Box1= styled.div`
display: flex;
flex-direction: row;

`
const Box= styled.div`
right: 0px;
padding:5px;
position: absolute;
`
const BoxLeft= styled.div`
left: 0px;
padding: 14px;
position: absolute;
`

const Card = () => {
  return (
    <>
    <Box1>
    <BoxLeft>
<ImageAvatar url='.\Assests\image 7.png'/>
</BoxLeft>
<Box>
<MoreHorizIcon/>
</Box>
</Box1>
    </>
  )
}

export default Card
