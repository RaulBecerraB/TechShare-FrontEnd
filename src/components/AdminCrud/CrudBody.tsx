import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import '@/styles/crud-table.css'

interface CrudBodyProps {
    names: string[];
}

export default function CrudBody({ names }: CrudBodyProps) {

    return (
        <div>
            <div className='white-container'>
                <table className='crud-table'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {names.map((name, index) => (
                            <tr key={index}>
                                <td>{name}</td>
                                <td></td>
                                <td>
                                    <button className="action-button">
                                        <FaEdit />
                                    </button>
                                    <button className="action-button">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
