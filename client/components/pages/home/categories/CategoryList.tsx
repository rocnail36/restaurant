import React from 'react'
import CategoryBadge from './CategoryBadge'

const categories = ["todos","pizzas","hamburguesas","pollo","bebidas","entradas"]

const CategoryList = ({categories1}:{categories1?:string[]}) => {
  return (
    <div className='self-start flex gap-2 w-[100%] py-4 overflow-x-scroll mb-6'>  
    {categories.map(category => (
          <CategoryBadge category={category}/>
    ))}   
    </div>
  )
}

export default CategoryList