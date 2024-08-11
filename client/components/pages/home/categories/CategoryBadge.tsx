import React from 'react'
import { Badge } from "@/components/ui/badge"

const CategoryBadge = ({category}:{category:string}) => {
  return (
    <Badge className='bg-gray-300 text-sm font-semibold'>{category}</Badge>
  )
}

export default CategoryBadge