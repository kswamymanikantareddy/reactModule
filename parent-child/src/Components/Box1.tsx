import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
    palette: {
      text: {
        secondary: '#7D7D89',
        primary: '#343446',
      },
    },
  });

const Box1 = () => {
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
  top:24,
  left:177.5,
  order:1
}}>
 <Box sx={{ 
color: 'text.secondary',
Top:24,
Left:212.5
}}>You are buying</Box>
<Box sx={{
    color:'text.primary',
    fontSize:24
}}>0.0234510 BTC</Box>
<Box sx={{color:'text.secondary'}}>1BTC = $3,297,866.84</Box>
</Box>
  </ThemeProvider>

  </>
  )
}

export default Box1