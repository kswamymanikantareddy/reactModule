import { Stack,Box } from '@mui/material'
import ImageAvatar from '../../Atoms/Avatar/ImageAvatar'
import TextVariant from '../../Atoms/Typography/TextVariants'

interface Props{
    children1:string,
    children2:string,
    url:string
}

const AvatarMolecule = ({children1,children2,url}:Props) => {
  return (
    <>
    <Stack direction='row' spacing={2} display='flex' alignItems={'center'}  position='relative'>
    <ImageAvatar url={url}/>
    <Box display='flex' flexDirection={'column'} height='42px' width='141px'>
<TextVariant color='text.secondary' variant='caption2' children={children1}/>
<TextVariant color='' variant='body1' children={children2}/>
    </Box>
    </Stack>
    </>
  )
}

export default AvatarMolecule
