"use client"
import React from 'react'
import CrudHeader from '@/components/AdminCrud/CrudHeader'
import CrudBody from '@/components/AdminCrud/CrudBody'

export default function roles() {

  const names: string[] = ["Admin", "User", "Guest"];
  const dummyData = Array.from({ length: 22 }, (_, i) => `Role ${i + 1}`);
  names.push(...dummyData);

  return (
    <div>
      <CrudHeader title='Roles' buttonLabel='AÑADIR ROL' buttonFunction={() => console.log('hii')} />
      <CrudBody names={names} />
    </div>
  )
}