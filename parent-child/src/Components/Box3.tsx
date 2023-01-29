import React from 'react'
import { Box, ThemeProvider, createTheme } from '@mui/system';
import Button from './button';
import '../App.css'

const theme = createTheme({
    palette: {
      text: {
        secondary: '#7D7D89',
        primary: '#343446',
      },
    },
  });

const Box3 = () => {
  return (
   <>
    <ThemeProvider theme={theme}>
  <Box sx={{
  height: 145,
  display:"flex",
  flexDirection: 'column',
  alignItems:'center',
  justifyContent:'space-evenly',
  position:'absolute',
}}>
 <Box sx={{ 
Top:24,
Left:212.5
}}>0.0234510 BTC----------------------------$34,000.00</Box>
<Box sx={{
   
}}>Minet Fee-------------------------------------$1,000.00</Box>
<Box sx={{color:'text.primary',
fontSize:16,fontWeight:500}}>  Total------------------------------------------$35,000.00     </Box>
<Box>
<input type='submit' value='BUY NOW' className='Button'/>
</Box>


</Box>
  </ThemeProvider>
   </>
  )
}

export default Box3