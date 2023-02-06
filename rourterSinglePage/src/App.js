import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Dashbord from './Components/Dashbord'
import About from './Components/About'
import {Routes,Route} from 'react-router-dom'
import Notfound from './Components/Notfound';
import Products from './Components/Products';
import Newproducts from './Components/Newproducts';
import Featuredproducts from './Components/Featuredproducts';
function App() {
 return (
 <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='dashbord' element={<Dashbord/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='product' element = {<Products/>}>
         <Route path='new' element={<Newproducts/>}/>
          <Route path='featured' element={<Featuredproducts/>}/>
      </Route>
      <Route path='*' element={<Notfound/>}/>

     </Routes>
</>
  );
}

export default App;
