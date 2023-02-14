import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import './App.css';
import CryptoTable from './components/organisms/AllAssests/CryptoTable';
import Theme from './Theme';

function App() {
  return (
    <>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme}>
  <CryptoTable/>
  </ThemeProvider>
  </StyledEngineProvider>
  
    </>

  );
}

export default App;
