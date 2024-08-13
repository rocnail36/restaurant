import Whatsapp from '@/components/global/Whatsapp'
import { Facebook, Instagram } from 'lucide-react'
import React from 'react'

const FooterSocial = () => {
  return (
   
    <div className='flex items-center'>
    <Facebook className='stroke-white stroke-[.5] fill-white'/>
    <Instagram className='stroke-white'/>
     <Whatsapp config={{width:20,height:20, stroke:"#fff", className:"m-[5px]"}}/>
    </div>
  )
}

export default FooterSocial