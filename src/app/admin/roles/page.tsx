"use client"
import CrudHeader from '@/components/AdminCrud/CrudHeader'
import CrudBody from '@/components/AdminCrud/CrudBody'
import { useFetchData } from '@/services/useFetchData'
import { useState } from 'react'

export default function roles() {

  const dataUrl = '/dummyData/dummy.json'
  const { data } = useFetchData<any>(dataUrl);

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Función que actualiza el término de búsqueda
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <CrudHeader
        title='Roles'
        buttonLabel='AÑADIR ROL'
        buttonDisabled={true}
        buttonFunction={() => alert('Adding role')}
        onSearchChange={handleSearchChange} // Asegúrate de pasar esta función
      />
      <CrudBody data={data} searchTerm={searchTerm} /> {/* Pasar el término de búsqueda */}
    </div>
  )
}
