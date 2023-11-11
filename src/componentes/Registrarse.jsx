import React from 'react'
import InputNombreRe from './InputNombreRe'
import InputCorreoRe from './InputCorreoRe';
import InputContraReg from './InputContraReg';
import ButtonRegistro from './ButtonRegistro';

const Registrarse = () => {
    return (
        <div className='registrarsePrincipal'>
            <h1>Registrarse</h1>
            <InputNombreRe/>
            <InputCorreoRe/>
            <InputContraReg/>
            <ButtonRegistro/> 
            <p>Al registrarse, aceptas nuestras Condiciones de uso y politica de privacidad</p>
            <p>¿Ya tienes una cuenta?<a href="">IniciarSesion</a></p>
        </div>
    );
}



export default Registrarse