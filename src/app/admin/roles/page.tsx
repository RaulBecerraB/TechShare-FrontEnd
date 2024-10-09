"use client"
import React from 'react'
import CrudHeader from '@/components/AdminCrud/CrudHeader'
import CrudBody from '@/components/AdminCrud/CrudBody'

export default function roles() {

  return (
    <div>
      <CrudHeader title='Roles' buttonLabel='AÑADIR ROL' buttonFunction={() => console.log('hii')} />
      <CrudBody />
    </div>
  )
}