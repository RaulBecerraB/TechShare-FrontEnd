"use client"
import CrudHeader from '@/components/AdminCrud/CrudHeader'
import CrudBody from '@/components/AdminCrud/CrudBody'
import { useFetchData } from '@/services/useFetchData'
import { useState, useEffect } from 'react'
import ModalBase from '@/components/Modal/ModalBase' // Importamos el ModalBase
import BorderTextField from '@/components/Inputs/BorderTextField' // Importamos el BorderTextField

export default function roles() {

  //const dataUrl = '/dummyData/dummy.json'
  //const { data } = useFetchData<any>(dataUrl)
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [formData, setFormData] = useState(
    {
      roleName: ''
    }
  )

  // Manejar cambios en los inputs
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSearchChange = (value: string) => setSearchTerm(value)

  const showModal = () => setIsModalVisible(true)
  const hideModal = () => setIsModalVisible(false)

  const token = localStorage.getItem("sessionToken");

  useEffect(() => {
    fetchRoles(token)
  }, [])

  const fetchRoles = (token: any) => {
    fetch("http://localhost:8080/admin/role/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }

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
          <ModalBase
            onClose={hideModal}
            header='Crear nuevo Rol'
            onSave={() => console.log('Guardar')}
          >
            <BorderTextField
              name='roleName'
              placeholder='Nombre del rol'
              onChange={handleChange}
              value={formData.roleName}
            />
          </ModalBase>
        </div>
      )}
    </div>
  )
}
