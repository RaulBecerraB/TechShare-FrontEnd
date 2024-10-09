"use server"
import React from 'react'
import CrudHeader from '@/components/AdminCrud/CrudHeader'

export default async function roles() {

  return (
    <div>
      <CrudHeader title='Roles' buttonLabel='AÑADIR ROL'/>
    </div>
  )
}