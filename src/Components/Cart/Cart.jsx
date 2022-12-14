import React, {useContext} from 'react'
import { cartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import '../../App.css';

const Cart = () => {
const { products , deleteProduct, getTotal, clear } = useContext(cartContext);

if (products.length === 0) {

  return (
   <>
<h1>No tienes articulos en tu carrito <br/><Link className='waves-effect waves-light btn' to="/">click para explorar </Link></h1>
</>
  )}

  return(
    
    <>  
    <table className='table_carrito'>
  
        
        {products.map(product => <tr className='producto_carrito' key={product.id}> <h4 ><img className='img_carrito' src={product.image} alt={product.title} />  {product.title} Precio: {product.price} </h4>  <button className='waves-effect waves-light btn' onClick={()=>deleteProduct(product.id)}>Eliminar item</button>         <p>Unidades x {product.quantity}</p>
        
         <button onClick={clear} className='waves-effect waves-light btn'> limpiar</button>

            </tr>)}

            <p>Total:{getTotal() +"$ USD"}</p>
<Link className='waves-effect waves-light btn'  to="./pago">Siguiente</Link>
    </table>

 
 </>
 
  )

}
  

export default Cart
