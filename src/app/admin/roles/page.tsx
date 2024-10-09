"use client"
import React from 'react'
import CrudHeader from '@/components/AdminCrud/CrudHeader'
import CrudBody from '@/components/AdminCrud/CrudBody'

export default function roles() {

  const names: string[] = ["Admin", "User", "Guest"];

  return (
    <div>
      <CrudHeader title='Roles' buttonLabel='AÑADIR ROL' buttonFunction={() => console.log('hii')} />
      <CrudBody names={names} />
    </div>
  )
}