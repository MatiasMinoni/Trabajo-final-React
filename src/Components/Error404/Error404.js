import { Link } from 'react-router-dom';


const Error404= () =>{
    return(
<div>
<h3>Error 404</h3>
<p>La pagina no existe</p>
<Link to="/">Volver al inicio</Link>
</div>



    )
}

export default Error404