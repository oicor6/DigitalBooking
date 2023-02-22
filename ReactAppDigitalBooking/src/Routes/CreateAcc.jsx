import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useInput from '../Components/Utils/useInput'
7
const CreateAcc = () => {
const name = useInput('text', 'name');
const surname = useInput('text', 'surname')
const email = useInput('email', 'email')
const password = useInput('password', 'password');
const confirmPassword = useInput('password', 'password');
const [msg, setMsg] = useState()
const validEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(email.value)
const validPassword = /^(?=\w*[a-z])\S{6,}$/.test(password.value)
const passwordsMatch = password.value === confirmPassword.value
const defaultUser = {
email: 'valdiviezomelina@gmail.com',
password: '123456',
}
const onClick = (e) =>{
  e.preventDefault();
  if( validPassword && validEmail && passwordsMatch){
    setMsg('ingreso correcto')
    localStorage.setItem('Username',name.value + ' ' + surname.value)
  } else{
    setMsg('Por favor vuelva a intentarlo, sus credenciales son inválidas')
  }
}

  return (
    <div className='signup'>
        <h1>Crear Cuenta</h1>
        <form>
          <div className='signupCampos'>
          <label>Nombre</label>
          <input {...name}/>
          <label>Apellido</label>
          <input {...surname}/>
          <label>Correo electrónico</label>
          <input {...email}/>
          <label>Contraseña</label>
          <input {...password}/>
          <label>Confirmar contraseña</label>
          <input {...confirmPassword}/>
          <input className='crearCuenta' type='submit' value="Crear cuenta" onClick={onClick}/>
          </div>
          <p>{msg}</p>
          <div className='linkLogin'>
          <p>¿Ya tienes una cuenta?</p>
          <Link to={'/login'}><p className='linkloginBoton'>Iniciar sesión</p></Link>
          </div>
        </form>
            
    </div>
  )
  }

export default CreateAcc