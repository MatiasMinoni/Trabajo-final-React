import React, {useContext, useState, createContext, useEffect, Children} from 'react'


import { cartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import '../../App.css';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import '../../App.css';
import { ClassNames } from '@emotion/react';

const Pago = () => {
    const { products , getTotal, comprobante, clear } = useContext(cartContext);
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
    const [buyFinalized, setBuyFinalized] = useState(false)





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
       setBuyFinalized(false)

       addDoc(ventasCollection, {
        


        datosComprador,
         items:[{products}],
         date:serverTimestamp(),
         total: getTotal()
       
         }

         )
         setBuyFinalized(false)

        }
     
     

    return(

<>
 <h1>Pago</h1>
<form>
    <label>
        Nombre:
        <input type="text"  value={nombre} onChange={(e) => setNombre(e.target.value)}  placeholder="Nombre" required={true}

/>
    </label>
    <label>
        Apellido:
        <input type="text"  value={apellido} onChange={(e) => setApellido(e.target.value)}  placeholder="Apellido" required={true}

/>
    </label>
    <label>
        Email:
        <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="ejemplo@gmail.com" required={true}

/>
    </label>
    <label>
       Confirmar Email:
        <input type="email"  value={authemail} onChange={(e) => setauthEmail(e.target.value)} placeholder="ejemplo@gmail.com"  required={true}

/>
    </label>
    <label>
        Direccion:
        <input type="text"  value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="calle falsa 123"  required={true}

/>
    </label>
    <label>
        Telefono:
        <input type="number"  value={telefono} onChange={(e) => setTelefono(e.target.value)}  placeholder="Telefono" required={true}

/>
    </label>
  
    <label>
        Codigo postal:
        <input type="number"  value={codigo} onChange={(e) => setCodigo(e.target.value)}  placeholder="0000" required={true}

/>
    </label>
     <label>
        Tarjeta:
        <input type="number"  value={tarjeta} onChange={(e) => setTarjeta(e.target.value)}  placeholder="00000000000" required={true}

/>
    </label> 
    <label>
        Mes:
        <input type="number"  value={mes} onChange={(e) => setMes(e.target.value)}  placeholder="Mes" required={true}

/>
    </label>
    <label>
        Año:
        <input type="number"  value={anio} onChange={(e) => setAnio(e.target.value)}  placeholder="Año" required={true}

/>
    </label>
    <label>
        CVV:
        <input type="number"  value={cvv} onChange={(e) => setCvv(e.target.value)}  placeholder="CVV" required={true}

/>
    </label>


<button onClick={(finalizarCompra)} className='waves-effect waves-light btn'>Finalizar</button>
</form> 

{setBuyFinalized ?
<p></p>
:
<p>{comprobante}</p>
}


</>


      )
    }

    export default Pago