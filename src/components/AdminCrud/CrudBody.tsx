import React from 'react'

export default function CrudBody() {
    return (
        <div>
            <div className='white-container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Admin</td>
                            <td>Administrador</td>
                            <td>
                                <button className='button'>Editar</button>
                                <button className='button'>Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
