import './App.css';
import Signup from './Signup'
import Login from './Login'
import Product from './Product'
import Cart from './Cart';
import Order from "./Order";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from 'react-use-cart';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Signup/>} />
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        
        
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
