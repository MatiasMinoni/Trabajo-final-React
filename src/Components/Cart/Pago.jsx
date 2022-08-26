import React, {useContext, useState, createContext, useEffect, Children} from 'react'


import { cartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import '../../App.css';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';

const Pago = () => {
    const { products , getTotal, comprobante } = useContext(cartContext);
    const [nombre, setNombre]=useState(""); 
    const [apellido, setApellido]=useState('');
    const [email, setEmail]=useState('');
    const [direccion, setDireccion]=useState('');
    const [telefono, setTelefono]=useState('');
    const [codigo, setCodigo]=useState('');
    const [tarjeta, setTarjeta]=useState('');
    const [mes, setMes]=useState('');
    const [anio, setAnio]=useState('');
    const [cvv, setCvv]=useState('');




const datosComprador = [
    {nombre},
    {apellido},
    {email},
    {direccion},
  {telefono},
   {codigo},
    {tarjeta},
   {mes},
   {anio},
  {cvv},
  {Total:getTotal()},
  {comprobante}
 ] 
    


    
    
     const finalizarCompra = () => {
       const ventasCollection = collection(db, 'ventas');
       addDoc(ventasCollection, {
        


        datosComprador,
         items:[{products}],
         date:serverTimestamp(),
         total: getTotal()
       
         }
         
       )
       alert("Gracias por tu compra! pronto te llegará el comprobante al mail")
       console.log(datosComprador)
        }
     
    
    return(
<>
<h1>Pago</h1>
<form>
    <label>
        Nombre:
        <input type="text"  value={nombre} onChange={(e) => setNombre(e.target.value)}   required/>
    </label>
    <label>
        Apellido:
        <input type="text"  value={apellido} onChange={(e) => setApellido(e.target.value)}  required/>
    </label>
    <label>
        Email:
        <input type="text"  value={email} onChange={(e) => setEmail(e.target.value)}  required/>
    </label>
    <label>
        Direccion:
        <input type="text"  value={direccion} onChange={(e) => setDireccion(e.target.value)}  required/>
    </label>
    <label>
        Telefono:
        <input type="text"  value={telefono} onChange={(e) => setTelefono(e.target.value)}  required/>
    </label>
  
    <label>
        Codigo postal:
        <input type="text"  value={codigo} onChange={(e) => setCodigo(e.target.value)}  required/>
    </label>
     <label>
        Tarjeta:
        <input type="text"  value={tarjeta} onChange={(e) => setTarjeta(e.target.value)}  required/>
    </label> 
    <label>
        Mes:
        <input type="text"  value={mes} onChange={(e) => setMes(e.target.value)}  required/>
    </label>
    <label>
        Año:
        <input type="text"  value={anio} onChange={(e) => setAnio(e.target.value)}  required/>
    </label>
    <label>
        CVV:
        <input type="text"  value={cvv} onChange={(e) => setCvv(e.target.value)}  required/>
    </label>


    <Link to="/" onClick={(finalizarCompra)}>Finalizar</Link>
</form>


</>

      )}
    export default Pago