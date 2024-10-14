"use client"
import CrudHeader from '@/components/AdminCrud/CrudHeader'
import CrudBody from '@/components/AdminCrud/CrudBody'
import { useFetchData } from '@/services/useFetchData'
import { useState } from 'react'
import Modal from '@/components/Modal/Modal' // Importamos el Modal

export default function roles() {
  const dataUrl = '/dummyData/dummy.json'
  const { data } = useFetchData<any>(dataUrl)

  const [searchTerm, setSearchTerm] = useState('')

  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleSearchChange = (value: string) => setSearchTerm(value)

  const showModal = () => setIsModalVisible(true)

  const hideModal = () => setIsModalVisible(false)

  return (
    <div>
      <CrudHeader
        title='Roles'
        buttonLabel='AÑADIR ROL'
        buttonDisabled={false}
        buttonFunction={showModal}
        onSearchChange={handleSearchChange}
      />
      <CrudBody data={data} searchTerm={searchTerm} />

      {isModalVisible && (
        <div className="modal-overlay">
          <Modal onClose={hideModal} />
        </div>
      )}
    </div>
  )
}
