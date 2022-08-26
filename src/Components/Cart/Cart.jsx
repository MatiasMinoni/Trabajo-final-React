import React, {useContext} from 'react'
import { cartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import '../../App.css';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';

const Cart = () => {
const { products , deleteProduct, getTotal, clear } = useContext(cartContext);

if (products.length === 0) {

  return (
   <>
<h1>No tienes articulos en tu carrito, <Link to="/">click para explorar </Link></h1>
</>
  )}

  return(
    
    <>  
    <table className='table_carrito'>
  
        
        {products.map(product => <tr className='producto_carrito' key={product.id}> <h4 ><img className='img_carrito' src={product.image} />  {product.title} Precio: {product.price} </h4>  <button onClick={()=>deleteProduct(product.id)}>X</button>         <p>x {product.quantity}</p>
         <p>${product.price*product.quantity}</p>
         <button onClick={clear}> limpiar</button>

            </tr>)}

            <p>Total:${getTotal()}</p>
<Link to="./pago">Siguiente</Link>
    </table>

 
 </>
 
  )

}
  

export default Cart
