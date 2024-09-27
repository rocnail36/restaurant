
import Container from '@/components/pages/dashboard/Layout/Container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const arr = Array.from({length:20},(b,i) => i)

const page = () => {
  return (
    <Container>
      <div className='flex flex-wrap m-auto gap-2 justify-center'>
      {arr.map(arr => (
        <div className='relative aspect-video h-32 overflow-hidden rounded-md'>
        <Image src={"/banner-1.png"} fill alt='banner'/>
        <Button className='absolute bottom-1 right-1'>Eliminar</Button>
      </div>
       ))}
      </div>
    </Container>
  )
}

export default page