import React from 'react';
import imgHeart from '../images/favIcon.png';
import imgLocaliz from '../images/localizador.png';

const Card = ({card}) => {
  return (
    <div className='card'>
        <div className='cardImg'>
            <img src={card.img} className='imageCard'/>
            <img className='heartIcon' src={imgHeart}/>
        </div>
        <div className='cardDetails'>
            <h5 style={{ opacity: '0.5'}}>{card.category}</h5>
            <h1>{card.title}</h1>
            <p className='location'><img src={imgLocaliz}/>{card.location}</p>
            <p className='cardDescription'>{card.description}</p>
            <button>ver detalle</button>
        </div>
    </div>
  )
}

export default Card