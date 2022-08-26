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
    const [authemail, setauthEmail]=useState('');
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
    {authemail},
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
        <input type="text"  value={nombre} onChange={(e) => setNombre(e.target.value)}  placeholder="Nombre" required/>
    </label>
    <label>
        Apellido:
        <input type="text"  value={apellido} onChange={(e) => setApellido(e.target.value)}  placeholder="Apellido" required/>
    </label>
    <label>
        Email:
        <input type="text"  value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="ejemplo@gmail.com" required/>
    </label>
    <label>
       Confirmar Email:
        <input type="text"  value={authemail} onChange={(e) => setEmail(e.target.value)} placeholder="ejemplo@gmail.com"  required/>
    </label>
    <label>
        Direccion:
        <input type="text"  value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="calle falsa 123"  required/>
    </label>
    <label>
        Telefono:
        <input type="number"  value={telefono} onChange={(e) => setTelefono(e.target.value)}  placeholder="Telefono" required/>
    </label>
  
    <label>
        Codigo postal:
        <input type="number"  value={codigo} onChange={(e) => setCodigo(e.target.value)}  placeholder="0000" required/>
    </label>
     <label>
        Tarjeta:
        <input type="number"  value={tarjeta} onChange={(e) => setTarjeta(e.target.value)}  placeholder="00000000000" required/>
    </label> 
    <label>
        Mes:
        <input type="number"  value={mes} onChange={(e) => setMes(e.target.value)}  placeholder="Mes" required/>
    </label>
    <label>
        Año:
        <input type="number"  value={anio} onChange={(e) => setAnio(e.target.value)}  placeholder="Año" required/>
    </label>
    <label>
        CVV:
        <input type="number"  value={cvv} onChange={(e) => setCvv(e.target.value)}  placeholder="CVV" required/>
    </label>


    <Link to="/" onClick={(finalizarCompra)}>Finalizar</Link>
</form>


</>

      )}
    export default Pago