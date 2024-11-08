"use client"
import CrudHeader from '@/components/AdminCrud/CrudHeader'
import CrudBody from '@/components/AdminCrud/CrudBodyWithImages'
import { useFetchData } from '@/services/useFetchData'
import { useState, useEffect } from 'react'
import ModalBase from '@/components/Modal/ModalBase'
import BorderTextField from '@/components/Inputs/BorderTextField'
import { useAuth } from '@/app/hooks/useAuth'
import { getToken } from '@/services/storageService'

export default function SubCategories() {

    type SubCategory = {
        subCategoriesId: number;
        name: string;
        imagePath?: string;
        categoryId: number;
        categoryName: string;
    };

    const [data, setData] = useState<SubCategory[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isCreateModalVisible, setCreateModalVisible] = useState(false)
    const [isEditModalVisible, setEditModalVisible] = useState(false)
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false)
    const [clickedSubCategoryId, setClickedSubCategoryId] = useState<number | null>(null)
    const [formData, setFormData] = useState<{ name: string; image?: File | null; categoryId: number }>({ name: '', image: null, categoryId: 0 })

    const handleSearchChange = (value: string) => setSearchTerm(value)

    const showCreateModal = () => setCreateModalVisible(true)
    const hideCreateModal = () => setCreateModalVisible(false)

    const showEditModal = () => setEditModalVisible(true)
    const hideEditModal = () => setEditModalVisible(false)

    const showDeleteModal = () => setDeleteModalVisible(true)
    const hideDeleteModal = () => setDeleteModalVisible(false)

    const editButtonClicked = (id: number) => {
        const selectedSubCategory = data.find((subCategory) => subCategory.subCategoriesId === id)
        if (selectedSubCategory) {
            setClickedSubCategoryId(id)
            setFormData({ name: selectedSubCategory.name, image: null, categoryId: selectedSubCategory.categoryId })
            showEditModal()
        }
    }

    const deleteButtonClicked = (id: number) => {
        setClickedSubCategoryId(id)
        showDeleteModal()
    }

    useAuth()
    const token = getToken()

    useEffect(() => {
        fetchSubCategories(token)
    }, [])

    const fetchSubCategories = (token: any) => {
        fetch("http://localhost:8080/subcategories/all", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((data) => setData(data))
    }

    const handleSubCategoryCreation = (e: any) => {
        e.preventDefault()
        const formDataObj = new FormData()
        formDataObj.append('name', formData.name)
        formDataObj.append('categoryId', formData.categoryId.toString())
        if (formData.image) formDataObj.append('image', formData.image)

        fetch("http://localhost:8080/subcategories/create", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formDataObj,
        })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((data) => {
                fetchSubCategories(token)
                hideCreateModal()
            })
            .catch((error) => console.error("Error:", error))
    }

    const handleSubCategoryUpdate = (e: any) => {
        e.preventDefault()
        const formDataObj = new FormData()
        formDataObj.append('name', formData.name)
        formDataObj.append('categoryId', formData.categoryId.toString())
        if (formData.image) formDataObj.append('image', formData.image)

        fetch(`http://localhost:8080/subcategories/update/${clickedSubCategoryId}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formDataObj,
        })
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((data) => {
                fetchSubCategories(token)
                hideEditModal()
            })
            .catch((error) => console.error("Error:", error))
    }

    const handleSubCategoryDeletion = (e: any) => {
        e.preventDefault()
        fetch(`http://localhost:8080/subcategories/delete/${clickedSubCategoryId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log(response)
                if (response.status === 204) {
                    fetchSubCategories(token)
                    hideDeleteModal()
                }
            })
            .catch((error) => console.error("Error:", error))
    }

    return (
        <div>
            <CrudHeader
                title='SubCategories'
                buttonLabel='Add SubCategory'
                buttonDisabled={false}
                buttonFunction={showCreateModal}
                onSearchChange={handleSearchChange}
            />
            <CrudBody
                data={data}
                searchTerm={searchTerm}
                onDelete={deleteButtonClicked}
                onEdit={editButtonClicked}
            />
            {isCreateModalVisible && (
                <div className="modal-overlay">
                    <ModalBase
                        onClose={hideCreateModal}
                        header='Create New SubCategory'
                        onSubmit={handleSubCategoryCreation}
                    >
                        <BorderTextField
                            name='name'
                            placeholder='SubCategory Name'
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            value={formData.name}
                        />
                        <BorderTextField
                            name='categoryId'
                            placeholder='Category ID'
                            onChange={(e) => setFormData({ ...formData, categoryId: parseInt(e.target.value) })}
                            value={formData.categoryId.toString()}
                        />
                        <input
                            type="file"
                            onChange={(e) => setFormData({ ...formData, image: e.target.files ? e.target.files[0] : null })}
                        />
                    </ModalBase>
                </div>
            )}
            {isEditModalVisible && (
                <div className="modal-overlay">
                    <ModalBase
                        onClose={hideEditModal}
                        header='Edit SubCategory'
                        onSubmit={handleSubCategoryUpdate}
                    >
                        <BorderTextField
                            name='name'
                            placeholder='SubCategory Name'
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            value={formData.name}
                        />
                        <BorderTextField
                            name='categoryId'
                            placeholder='Category ID'
                            onChange={(e) => setFormData({ ...formData, categoryId: parseInt(e.target.value) })}
                            value={formData.categoryId.toString()}
                        />
                        <input
                            type="file"
                            onChange={(e) => setFormData({ ...formData, image: e.target.files ? e.target.files[0] : null })}
                        />
                    </ModalBase>
                </div>
            )}
            {isDeleteModalVisible && (
                <div className="modal-overlay">
                    <ModalBase
                        onClose={hideDeleteModal}
                        header='Confirm Delete SubCategory'
                        onSubmit={handleSubCategoryDeletion}
                    >
                        <p>Are you sure you want to delete this subcategory?</p>
                    </ModalBase>
                </div>
            )}
        </div>
    )
}
