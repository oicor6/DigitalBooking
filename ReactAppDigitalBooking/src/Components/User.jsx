import React from 'react'
import { Link } from 'react-router-dom'

const User = ({user}) => {
    const iniciales = Array.from(user)
    const refresh = () => {
      localStorage.removeItem('Username') 
      window.location.reload(true)
    }
  return (
    <div className='userBox'>
        <div className = 'imgPerfil'><p>{iniciales[0]+iniciales[1]}</p></div>
        <div>
            <p>Hola,</p>
            <p style={{color: '#1DBEB4'}}>{user}</p>
        </div>
        <Link to={'/'} onClick={()=> refresh()} style={{ fontWeight: 'bolder', textDecoration: 'none'}}><p>X</p></Link>
    </div>
  )
}

export default User