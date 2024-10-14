"use client"

import React from 'react'
import '@/styles/containers.css'
import '@/styles/modal.css'
import Button from '@/components/AdminCrud/PrimaryButton'

export default function Modal() {
    return (
        <div className='white-container w-64'>
            <table className='modal'>
                <thead>
                    <tr className='text-lg'>
                        <th>Crear nuevo Rol</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >
                            <input className='mt-4 modal-input' type='text' />
                        </td>
                    </tr>
                    <tr className='justify-end flex space-x-3 mt-4'>
                        <Button
                            buttonLabel='Cancelar'
                            buttonFunction={() => console.log('Crear')}
                            disabled={false}
                            isSecondary={true}
                        />
                        <Button
                            buttonLabel='Guardar'
                            buttonFunction={() => console.log('Crear')}
                            disabled={false}
                        />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
