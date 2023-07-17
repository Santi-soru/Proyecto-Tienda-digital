import { useState } from 'react'
import '../Checkout/Checkout.scss'
import { Link } from 'react-router-dom'
function Checkout(){

    const[registro, setRegristro]=useState({
        email: '',
        direccion: '',
        CP: ''
    })

    const registrandoImput=(ingreso) =>{
        console.log(ingreso.target.name)
        setRegristro({
            ...registro,
            [ingreso.target.name]: ingreso.target.value
        })
    }
    const sumit = (formulario)=>{
        formulario.preventDefaul()
        console.log('submit')
        console.log(registro)
 
    }

    return(
        <div>
            <h2 className='checkH2'>Completa el formulario:</h2>
        <div className="checkContenedor">
            <form onSubmit={sumit}>
                <input value={registro.email} type="text" placeholder='Email' onChange={registrandoImput} className='nombreImput' name='email' />

                <input value={registro.direccion} type='text' placeholder='Direccion' onChange={registrandoImput}  className='nombreImput' name='direccion'/>

                <input value={registro.CP}  type='number' placeholder='Codigo Postal' onChange={registrandoImput} className='nombreImput' name='CP'/>
                
                <button  type="submit" > <Link to='/'>Confirmar</Link> </button>
            </form>
            
        </div>
        </div>
    )
}

export default Checkout;