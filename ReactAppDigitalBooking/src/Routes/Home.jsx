import React from 'react'
import Search from '../Components/Search'
import data from '../listado.json'
import Card from '../components/Card'
import { CategoryCard } from '../Components/CategoryCard'
import categoriesData from '../categories.json'

const Home = () => {
  return (
    <>
      <Search/>
      <>
      <h2 className='tituloHome'>Buscar por tipo de alojamiento</h2>
      <div className='categoriesList'>
        {categoriesData.map(category => (
          <CategoryCard category={category} key={category.category}/>
        ))}
      </div>
      </>
      <>
      <h2 className='tituloHome'>Recomendaciones</h2>
      <div className='containerList'>
      {data.map( card => (
            <Card card={card} key={card.title}/>
          ))}
      </div>
      </>
    </>
  )
}

export default Home