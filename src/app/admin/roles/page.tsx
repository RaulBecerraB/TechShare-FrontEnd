"use client"
import CrudHeader from '@/components/AdminCrud/CrudHeader'
import CrudBody from '@/components/AdminCrud/CrudBody'
import { useFetchData } from '@/services/useFetchData'
import { useState, useEffect } from 'react'
import Modal from '@/components/Modal/Modal' // Importamos el Modal

export default function roles() {

  //const dataUrl = '/dummyData/dummy.json'
  //const { data } = useFetchData<any>(dataUrl)
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

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
          <Modal onClose={hideModal} />
        </div>
      )}
    </div>
  )
}
