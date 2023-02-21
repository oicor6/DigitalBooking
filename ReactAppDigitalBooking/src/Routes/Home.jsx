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
      <h1>Buscar por tipo de alojamiento</h1>
      <div className='categoriesList'>
        {categoriesData.map(category => (
          <CategoryCard category={category} key={category.category}/>
        ))}
      </div>
      </>
      <>
      <h1>Recomendaciones</h1>
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