import React from 'react';
import Logo from '../images/LogoHeader.png'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
       <Link to={'/'}><img src={Logo} alt="Logo"/></Link>
       <div>
       <Link to="{'/LogIn'}"><button className='headerButtons'>Iniciar Sesion</button></Link>
       <Link to="{'/CreateAcc'}"><button className='headerButtons'>Crear Cuenta</button></Link>
       </div>
    </div>
  )
}

export default Header