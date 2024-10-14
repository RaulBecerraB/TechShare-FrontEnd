import React from 'react'
import '@/styles/containers.css'
import '@/styles/modal.css'

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
                        <td className=''>
                            <input type='text' />
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
