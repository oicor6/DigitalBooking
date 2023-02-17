import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useInput from '../Components/Utils/useInput'

const LogIn = () => {
  const email = useInput('email', 'email', "email")
  const password = useInput('password', 'password', "")
  const [msg, setMsg] = useState();
const validEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(email.value)
const validPassword = /^(?=\w*[a-z])\S{6,}$/.test(password.value)

const onClick = (e) =>{
  e.preventDefault();
  if(validEmail && validPassword){
    setMsg('ingreso correcto')
  } else{
    setMsg('Por favor vuelva a intentarlo, sus credenciales son inválidas')
  }
}
  return (
    <div className='login'>
        <h1>Iniciar sesión</h1>
        <form>
          <span>Correo electronico</span>
        <input {...email} />
        <span>Contraseña</span>
        <input {...password} />
        <input type='submit' value="ingresar" onClick={onClick}/>
        <p>{msg}</p>
        <p>Aun no tenes cuenta?</p>
        <Link to={'/createacc'}><p>Registrate</p></Link>
      </form>
    </div>
  )
}

export default LogIn