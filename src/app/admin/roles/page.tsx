"use client"
import CrudHeader from '@/components/AdminCrud/CrudHeader'
import CrudBody from '@/components/AdminCrud/CrudBody'
import { useFetchData } from '@/services/useFetchData'

export default function roles() {

  const dataUrl = '/dummyData/dummy.json'

  const { data } = useFetchData<any>(dataUrl);

  return (
    <div>
      <CrudHeader title='Roles' buttonLabel='AÑADIR ROL' buttonFunction={() => alert('Adding role')} />
      <CrudBody data={data} />
    </div>
  )
}