import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../Components/Utils/useInput'

const LogIn = () => {
  const email = useInput('email', 'email')
  const password = useInput('password', 'password')
  const [msg, setMsg] = useState();
  const validEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(email.value)
  const validPassword = /^(?=\w*[a-z])\S{6,}$/.test(password.value)
  const [user, setUser] = useState({
    email: 'digitalBooking@gmail.com',
    pass: 'digital1',
})
const navigate = useNavigate()

const onClick = (e) =>{
  e.preventDefault();
  if((validEmail && validPassword) && (email.value === user.email && password.value === user.pass)){
    setMsg('ingreso correcto')
    navigate('/')
    window.location.reload(true)
  } else{
    setMsg('Por favor vuelva a intentarlo, sus credenciales son inválidas')
  }
}
  return (
    <div className='login'>
      <Link className='closeLogin' to={'/'}><p>X</p></Link>
        <h1>Iniciar sesión</h1>
        <form>
          <div className="loginCampos">
            <span>Correo electronico</span>
            <input {...email} />
            <span>Contraseña</span>
            <input {...password} />
            <input className="ingresar" type='submit' value="Ingresar" onClick={onClick}/>
          </div>
          <p>{msg}</p>
          <div className="registro">
            <p>¿Aún no tenés cuenta?</p>
            <Link to={'/createacc'}><p className='registroBoton'>Registrate</p></Link>
          </div>
      </form>
    </div>
  )
}

export default LogIn