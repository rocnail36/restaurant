import React, { useState } from 'react'
import { DataTable } from '../tables/orders/dataTables'
import { fakeUsers } from '@/fakeData/Users'
import { orderColumns } from '@tanstack/react-table'
import { LastRegister } from '../tables/users/lastRegisterColumn'

export const Last3Registers = () => {

  return (
    <div className='w-[100%] flex flex-col gap-2'>
      <h2 className='text-xl'>Ultimos 3 registros</h2>
      <DataTable  columns={LastRegister} data={fakeUsers}/>
    </div>
  )
}
