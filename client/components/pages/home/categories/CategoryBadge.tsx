import React from 'react'
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

const CategoryBadge = ({category}:{category:string}) => {
  return (
    <Link href={"#"}><Badge className='bg-gray-300 hover:bg-gray-400  text-base font-medium text-gray-700'>{category}</Badge></Link>
  )
}

export default CategoryBadge