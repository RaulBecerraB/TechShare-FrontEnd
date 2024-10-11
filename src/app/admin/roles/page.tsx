"use client"
import React, {useEffect,useState} from 'react'
import CrudHeader from '@/components/AdminCrud/CrudHeader'
import CrudBody from '@/components/AdminCrud/CrudBody'
import { useFetchData } from '@/services/useFetchData'

export default function roles() {

  const dataUrl = '/dummyUsers.json'

  const { data } = useFetchData<any>(dataUrl);  // Usar el hook para obtener los datos

  return (
    <div>
      <CrudHeader title='Roles' buttonLabel='AÑADIR ROL' buttonFunction={() => alert('Adding role')} />
      <CrudBody data={data} />
    </div>
  )
}