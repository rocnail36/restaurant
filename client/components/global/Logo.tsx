import Image from 'next/image'
import React from 'react'



const Logo = () => {

  

  return (<div className={`bg-white h-[60px] w-[60px] relative rounded-[50%]`}>
  <Image src={"/logo.png"} fill style={{objectFit:"fill"}} alt='logo restaurant' />
  </div>
  )
}

export default Logo