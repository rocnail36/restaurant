import React from 'react'

const User = () => {
  return (
    <div className='rounded-xl shadow-xl flex flex-col justify-center items-center gap-2'>
        <div className='rounded-[50%] w-[75px] h-[75px] bg-red-500 flex justify-center items-center'>
          <p className='text-white text-2xl '>J</p>
        </div>
        <p className='font-semibold'>Jose</p>
        <p>Jdanielrojas16@gmail.com</p>
        <p className='text-green-400'>Admin</p>
    </div>
  )
}

export default User