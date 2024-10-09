"use client"
import React from 'react'
import CrudHeader from '@/components/AdminCrud/CrudHeader'

export default function roles() {

  return (
    <div>
      <CrudHeader title='Roles' buttonLabel='AÑADIR ROL' buttonFunction={() => console.log('hii')} />
    </div>
  )
}