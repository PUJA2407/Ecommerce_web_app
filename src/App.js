
import './App.css';
import Navbar from './Componenets/Navbar/Navbar';
import { HashRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart'; 
//import LoginSignup from './Pages/LoginSignup';
import LoginSignup from './Pages/LoginSignup'; // Correct import statement
import Footer from './Componenets/Footer/Footer';
import men_banner from './Componenets/Assets/banner_mens.png'
import women_banner from './Componenets/Assets/banner_women.png'
import kid_banner from './Componenets/Assets/banner_kids.png'


function App() {
  return (
    <div>
       <HashRouter>
         <Navbar/>
         <Routes>
           <Route path='/'element={<Shop/>}/>
           <Route path='/mens'element={<ShopCategory banner={men_banner} category="men"/>}/>
           <Route path='/womens'element={<ShopCategory banner={women_banner} category="women"/>}/>
           <Route path='/kids'element={<ShopCategory banner={kid_banner} category="kid"/>}/>
           <Route path="/product" element={<Product/>}>
             <Route path=':productId' element={<Product/>}/>
           </Route>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/login' element={<LoginSignup/>}/>
         </Routes>
         <Footer/>
     </HashRouter>
    </div>
  );
}

export default App;
