import React from 'react'
import CardSection from './Card/CardSection'

const Sections = () => {
  return (
    <div className='w-[100%]  grid grid-cols-2 sm:grid-cols-3 gap-6 lg:grid-cols-3'>
        <CardSection/>
        <CardSection/>
        <CardSection/>
        <CardSection/>
        <CardSection/>
        <CardSection/>
    </div>
  )
}

export default Sections