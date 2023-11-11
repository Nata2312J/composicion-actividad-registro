import React from 'react'
import InputCorreoIni from './InputCorreoIni'
import InputContraseñaIni from './InputContraseñaIni'
import ButtonInicio from './ButtonInicio'

const Login = () => {
    return (
        <div className='inicioPrincipal'>
            <h1>Iniciar sesion</h1>
            <InputCorreoIni/>
            <InputContraseñaIni/> 
            <ButtonInicio/>
            <p>Al registrarse, aceptas nuestras Condiciones de uso y politica de privacidad</p>
            <p>¿No tienes una cuenta?<a href="">Registrarse</a></p>

        </div>
    )
}

export default Login