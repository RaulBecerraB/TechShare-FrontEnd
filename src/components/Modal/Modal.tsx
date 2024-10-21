"use client"

import React from 'react'
import '@/styles/containers.css'
import '@/styles/modal.css'
import Button from '@/components/Buttons/PrimaryButton'

interface ModalProps {
    onClose: () => void; // Función para cerrar el modal
}

export default function Modal({ onClose }: ModalProps) {
    return (
        <div>
            <div className='modal'>
                <div className='border-b-[1px]'>
                    <h2 className='text-lg'>Crear nuevo Rol</h2>
                </div>
                <div>
                    <input className='mt-4 modal-input' type='text' placeholder="Nombre del rol" />
                </div>
                <div className='justify-end flex space-x-3 mt-2'>
                    <Button
                        buttonLabel='Cancelar'
                        buttonFunction={onClose}
                        disabled={false}
                        isSecondary={true}
                    />
                    <Button
                        buttonLabel='Guardar'
                        buttonFunction={() => console.log('Guardar')}
                        disabled={false}
                    />
                </div>
            </div>
        </div>
    )
}
