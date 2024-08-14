import Logo from '@/components/global/Logo'
import Whatsapp from '@/components/global/Whatsapp'
import { Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import FooterSocial from './FooterSocial'
import FooterContact from './FooterContact'

const FooteHome = () => {
  return (
    <div className='bg-red-500 w-[100vw] rounded-t-[25px] py-4 px-2'>
            <div className='flex items-center flex-wrap gap-8'>
        
             <div>
             <Logo />
             <h3 className='text-white font-semibold text-xl mb-2'>Restaurante</h3>
              <FooterSocial/>
             </div>
        
              <FooterContact/>
           

            
             </div>
           
    </div>
  )
}

export default FooteHome