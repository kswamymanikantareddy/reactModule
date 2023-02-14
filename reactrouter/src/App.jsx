import './App.css';
import Navbar from './Components/Pages/Navbar';
import Home from './Components/Pages/Home'
import Dashbord from './Components/Pages/Dashbord'
import About from './Components/Pages/About'
import {Routes,Route} from 'react-router-dom'
import Notfound from './Components/Pages/Notfound';
import Products from './Components/Pages/Products';
import Newproducts from './Components/Pages/Newproducts';
import Featuredproducts from './Components/Pages/Featuredproducts';
function App() {
 return (
 <>
 <div className="container">
 <Navbar/>
 </div>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashbord' element={<Dashbord/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element = {<Products/>}>
         <Route path='new' element={<Newproducts/>}/>
          <Route path='featured' element={<Featuredproducts/>}/>
      </Route>
      <Route path='*' element={<Notfound/>}/>

     </Routes>
</>
  );
}

export default App;
