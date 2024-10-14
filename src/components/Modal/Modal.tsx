"use client"

import React from 'react'
import '@/styles/containers.css'
import '@/styles/modal.css'
import Button from '@/components/AdminCrud/PrimaryButton'

export default function Modal() {
    return (
        <div className=''>
            <div className='modal w-1/3'>
                <div className='border-b-[1px]'>
                    <h2 className='text-lg'>Crear nuevo Rol</h2>
                </div>
                <div>
                    <input className='mt-4 modal-input' type='text' placeholder="Nombre del rol" />
                </div>
                <div className='justify-end flex space-x-3 mt-2'>
                    <Button
                        buttonLabel='Cancelar'
                        buttonFunction={() => console.log('Cancelar')}
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
