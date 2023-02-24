import React from 'react';
import Logo from '../images/LogoHeader.png'
import {Link, useLocation} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import User from './User';
import MenuLogo from '../images/MenuLogo.png'
import LogoMob from '../images/LogoMob.png'

const Header = () => {
  const [user,setUser] = useState()

  let location = useLocation()
  const [mostrarLogin, setLogin] = useState(false)
  const [mostrarCrAcc, setCrAcc] = useState(false)

  useEffect(() => {
  const userName = localStorage.getItem('Username');
  if(userName){
    setUser(userName);
  }
  },[])

  useEffect(() => {
    if (location.pathname === "/login") {
      setCrAcc(true)
      setLogin(false)
    }else if (location.pathname === "/createacc"){
      setLogin(true)
      setCrAcc(false)
    }else{
      setLogin(true)
      setCrAcc(true)}
    },[location])
  
  return (
    <div className='header'>
      {/* <Link to={'/'}><img src={Logo} alt="Logo"/></Link> */}
      <Link to={'/'}><img className='LogoDesk' src={Logo} alt="Logo"/></Link>
      <Link to={'/'}><img className='LogoMob' src={LogoMob} alt="Logo"/></Link>
      <Link to={'/'}><img className='MenuLogo' src={MenuLogo} alt="Logo"/></Link>
      {/* {user ? <User user={user}/>: <div className='buttons'><Link to={'/login'}><button className='headerButtons'>Iniciar Sesion</button></Link><Link to={'createacc'}><button className='headerButtons'>Crear Cuenta</button></Link></div>} */}
      {user ? <User user={user}/>: <div className='buttons'><Link to={'/login'}><button className={mostrarLogin ? "visible headerButtons" : "invisible"} onClick={() => setLogin(true)}>Iniciar Sesion</button></Link><Link to={'/createacc'}><button className={mostrarCrAcc ? "visible headerButtons" : "invisible"} onClick={() => setCrAcc(true)}>Crear Cuenta</button></Link></div>}
    </div>
  )
}

export default Header