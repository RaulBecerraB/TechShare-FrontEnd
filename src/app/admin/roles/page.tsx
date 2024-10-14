"use client"
import CrudHeader from '@/components/AdminCrud/CrudHeader'
import CrudBody from '@/components/AdminCrud/CrudBody'
import { useFetchData } from '@/services/useFetchData'
import { useState } from 'react'
import Modal from '@/components/Modal/Modal'; // Importamos el Modal

export default function roles() {
  const dataUrl = '/dummyData/dummy.json'
  const { data } = useFetchData<any>(dataUrl);

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Estado para controlar la visibilidad del modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Función que actualiza el término de búsqueda
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  // Función para mostrar el modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Función para ocultar el modal
  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <CrudHeader
        title='Roles'
        buttonLabel='AÑADIR ROL'
        buttonDisabled={false}
        buttonFunction={showModal} // Mostrar el modal cuando se hace clic en el botón
        onSearchChange={handleSearchChange}
      />
      <CrudBody data={data} searchTerm={searchTerm} />

      {/* Mostrar el Modal si isModalVisible es true */}
      {isModalVisible && (
        <div className="modal-overlay">
          <Modal onClose={hideModal} />
        </div>
      )}
    </div>
  )
}
