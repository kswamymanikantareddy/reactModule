import { Button, Typography } from '@mui/material'
import React from 'react'
import { ButtonMolecule } from './Components/molecules/Buttons'
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import theme from './Theme';


const App = () => {
  return (
    <div>

{/* <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
      <Button variant='secondary'  ><Typography variant='body1'>manikanta reddy</Typography></Button>
  </ThemeProvider>
  </StyledEngineProvider> */}
  <ButtonMolecule/>
    </div>
  )
}

export default App
