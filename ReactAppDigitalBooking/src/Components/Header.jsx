import React from 'react';
import Logo from '../images/LogoHeader.png'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import User from './User';
import MenuLogo from '../images/MenuLogo.png'
import LogoMob from '../images/LogoMob.png'

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
      {/* <Link to={'/'}><img src={Logo} alt="Logo"/></Link> */}
      <Link to={'/'}><img className='LogoDesk' src={Logo} alt="Logo"/></Link>
      <Link to={'/'}><img className='LogoMob' src={LogoMob} alt="Logo"/></Link>
      <Link to={'/'}><img className='MenuLogo' src={MenuLogo} alt="Logo"/></Link>
      {user ? <User user={user}/>: <div className='buttons'><Link to={'/login'}><button className='headerButtons'>Iniciar Sesion</button></Link><Link to={'createacc'}><button className='headerButtons'>Crear Cuenta</button></Link></div>}
    </div>
  )
}

export default Header