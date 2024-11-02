"use client"
import CrudHeader from '@/components/AdminCrud/CrudHeader'
import CrudBody from '@/components/AdminCrud/CrudBody'
import { useFetchData } from '@/services/useFetchData'
import { useState, useEffect } from 'react'
import ModalBase from '@/components/Modal/ModalBase' // Importamos el ModalBase
import BorderTextField from '@/components/Inputs/BorderTextField' // Importamos el BorderTextField
import { useAuth } from '@/app/hooks/useAuth'
import {getToken} from '@/services/storageService'
import { get } from 'http'

export default function roles() {

  //const dataUrl = '/dummyData/dummy.json'
  //const { data } = useFetchData<any>(dataUrl)
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isCreateModalVisible, setCreateModalVisible] = useState(false)
  const [clickedRoleId, setClickedRoleId] = useState<number | null>(null)
  const [isEditModalVisible, setEditModalVisible] = useState(false)
  const [formData, setFormData] = useState<{ roleName: string }>({ roleName: '' });

  const handleSearchChange = (value: string) => setSearchTerm(value)

  const showCreateModal = () => setCreateModalVisible(true)
  const hideCreateModal = () => setCreateModalVisible(false)

  const showEditModal = (id: number) => {
    setEditModalVisible(true);
    setClickedRoleId(id);
  }
  const hideEditModal = () => setEditModalVisible(false)

  useAuth()
  const token = getToken()
  
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
  }

  const handleRoleCreation = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:8080/admin/role/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: formData.roleName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetchRoles(token);
        hideCreateModal();
      })
      .catch((error) => console.error("Error:", error));
  }

  const handleRoleDeletion = (id: number) => {
    console.log("Deleting role with ID:", id); // Confirma que recibes el ID correcto
    fetch(`http://localhost:8080/admin/role/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        fetchRoles(token); // Refresca la lista después de eliminar
    })
    .catch((error) => console.error("Error:", error));
};

const handleRoleUpdate = (id: number) => {
    console.log("Updating role with ID:", id); // Confirma que recibes el ID correcto
    fetch(`http://localhost:8080/admin/role/update/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            name: formData.roleName,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        fetchRoles(token); // Refresca la lista después de actualizar
        hideEditModal();
    })
    .catch((error) => console.error("Error:", error));
  }

  return (
    <div>
      <CrudHeader
        title='Roles'
        buttonLabel='AÑADIR ROL'
        buttonDisabled={false}
        buttonFunction={showCreateModal}
        onSearchChange={handleSearchChange}
      />
      <CrudBody 
      data={data} 
      searchTerm={searchTerm} 
      onDelete={handleRoleDeletion}
      onEdit={showEditModal}
      />

      {isCreateModalVisible && (
        <div className="modal-overlay">
          <ModalBase
            onClose={hideCreateModal}
            header='Crear nuevo Rol'
            onSubmit={handleRoleCreation}
          >
            <BorderTextField
              name='roleName'
              placeholder='Nombre del rol'
              onChange={(e) => setFormData({ ...formData, roleName: e.target.value })}
              value={formData.roleName}
            />
          </ModalBase>
        </div>
      )}
      {isEditModalVisible && (
        <div className="modal-overlay">
          <ModalBase
            onClose={() => setEditModalVisible(false)}
            header='Editar Rol'
            onSubmit={() => handleRoleUpdate(clickedRoleId!)}
          >
            <BorderTextField
              name='roleName'
              placeholder='Nombre del rol'
              onChange={(e) => setFormData({ ...formData, roleName: e.target.value })}
              value={formData.roleName}
            />
          </ModalBase>
          </div>
      )}
    </div>
  )
}
