import React from 'react'

export const CategoryCard = ({category}) => {
  return (
    // <div onClick={() => filterCategory(category.category)} className='categoryCard'>
    <div className='categoryCard'>    
        <img src={category.img} />
        <h3 style={{paddingLeft: '10px'}}>{category.category}</h3>
        <p style={{fontSize: '13px', paddingLeft: '10px'}}>12,909 hoteles</p>
    </div>
  )
}
