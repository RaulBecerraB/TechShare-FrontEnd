import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import '@/styles/crud-table.css'
import '@/styles/pagination.css'

interface CrudBodyProps {
    names: string[];
}

export default function CrudBody({ names }: CrudBodyProps) {

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = names.slice(indexOfFirstRecord, indexOfLastRecord);

    const totalPages = Math.ceil(names.length / recordsPerPage);

    const handleClick = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className='white-container'>
                <table className='crud-table'>
                    <thead>
                        <tr className='text-lg'>
                            <th>Nombre</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRecords.map((name, index) => (
                            <tr key={index}>
                                <td className='text-sm'>{name}</td>
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
            <div className="pagination">
                <button
                    className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    {'<'}
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handleClick(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
}
