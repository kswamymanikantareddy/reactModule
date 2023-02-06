import {Routes,Route} from 'react-router-dom'
import './App.css';
import CryptoTable from './components/organisms/AllAssests/CryptoTable';
// import Header from './pages/Navigation/Header';
// import CryptoTable from './components/organisms/AllAssests/CryptoTable';
// import Watchlist from './components/organisms/Watchlist/index';




function App() {
  return (
    <>
  {/* <Header/>
  <Routes>
      <Route path='/' element={<CryptoTable/>}/>
      <Route path='Watchlist' element={<Watchlist/>}/>
    </Routes> */}
  <CryptoTable/>
    </>

  );
}

export default App;
