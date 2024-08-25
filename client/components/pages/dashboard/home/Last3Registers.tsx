import React, { useState } from 'react'
import { DefaultTable } from '../Datatables/defaultTable/dataTables'
import { fakeUsers } from '@/fakeData/Users'
import { orderColumns } from '@tanstack/react-table'
import { LastRegister } from '../Datatables/users/lastRegisterColumn'

export const Last3Registers = () => {

  return (
    <div className='w-[100%] flex flex-col gap-2 lg:-translate-y-2'>
      <h2 className='text-xl'>Ultimos 3 registros</h2>
      <DefaultTable  columns={LastRegister} data={fakeUsers}/>
    </div>
  )
}
