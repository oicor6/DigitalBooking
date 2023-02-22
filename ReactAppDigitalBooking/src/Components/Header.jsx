import React from 'react';
import Logo from '../images/LogoHeader.png'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import User from './User';

const Header = () => {
  const [user,setUser] = useState()

  useEffect(() => {
  const userName = localStorage.getItem('Username');
  if(userName){
    setUser(userName);
  }
  },[])
  
  return (
    <div className='header'>
      <Link to={'/'}><img src={Logo} alt="Logo"/></Link>
      {user ? <User user={user}/>: <div className='buttons'><Link to={'/login'}><button className='headerButtons'>Iniciar Sesion</button></Link><Link to={'createacc'}><button className='headerButtons'>Crear Cuenta</button></Link></div>}
    </div>
  )
}

export default Header