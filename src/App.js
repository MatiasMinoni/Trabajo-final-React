import React from 'react';
import './App.css';

import { BrowserRouter as Router,Switch,Route,Link,BrowserRouter,Routes} from "react-router-dom";
import ItemDetailContainer from './Components/Containers/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Containers/ItemListContainer/ItemListContainer';
import Cart from './Components/Cart/Cart';
import CartCustomProvider  from './Components/CartContext/CartContext';
import Pago from './Components/Cart/Pago';
import Error404 from "./Components/Error404/Error404"
import Footer  from './Components/Footer/Footer';
//--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--IMPORTS--//


const App = () => {
  return (
    
<>
<BrowserRouter>
    <CartCustomProvider>
      <NavBar />
    
      <Routes>
        <Route exact path='/' element={<ItemListContainer greeting="Bienvenido"  />}/>
        <Route exact path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route exact path="/product/:productId" element={<ItemDetailContainer />} />
        <Route exact path='/carrito' element={<Cart/>}/>
        <Route exact path='carrito/pago' element={<Pago/>} />
        
        <Route path='*' element={<Error404/>} />
      </Routes>
      <Footer/>
    </CartCustomProvider>
</BrowserRouter>

    </>

  );
}

export default App;