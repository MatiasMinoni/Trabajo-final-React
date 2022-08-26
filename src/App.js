import React from 'react';
import './App.css';

import { BrowserRouter as Router,Switch,Route,Link,BrowserRouter,Routes} from "react-router-dom";
import ItemDetailContainer from './Components/Containers/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Containers/ItemListContainer/ItemListContainer';
import Cart from './Components/Cart/Cart';
import CartCustomProvider  from './Components/CartContext/CartContext';
import Pago from './Components/Cart/Pago';
//--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--//


const App = () => {
  return (
    
<>
<BrowserRouter>
    <CartCustomProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenido"  />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<Cart/>}/>
        <Route path='carrito/pago' element={<Pago/>} />
      </Routes>

    </CartCustomProvider>
</BrowserRouter>

    </>

  );
}

export default App;