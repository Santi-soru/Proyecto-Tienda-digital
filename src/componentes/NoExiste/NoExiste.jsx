import { Link } from "react-router-dom";
function NoExiste(){
    return(
        <div>
            <h1>Esta pagina no existe</h1>
            <p>!!Vuelva por donde vino !!</p>
           <button> <Link to='/' >Regresar</Link></button>
        </div>
    )
}
export default NoExiste;