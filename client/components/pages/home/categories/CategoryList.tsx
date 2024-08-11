import React from 'react'
import CategoryBadge from './CategoryBadge'

const categories = ["todos","pizzas","hamburguesas","pollo"]

const CategoryList = ({categories1}:{categories1?:string[]}) => {
  return (
    <div className='self-start flex gap-2'>  
    {categories.map(category => (
          <CategoryBadge category={category}/>
    ))}   
    </div>
  )
}

export default CategoryList