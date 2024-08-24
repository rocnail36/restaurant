import React from 'react'
import CardSection from './Card/CardSection'

const Sections = () => {
  return (
    <div className='w-[100%] lg:grid lg:grid-cols-3 gap-2 translate-y-4'>
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