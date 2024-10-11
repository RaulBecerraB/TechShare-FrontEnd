import React, { useState,useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '@/styles/crud-table.css';
import '@/styles/pagination.css';

interface CrudBodyProps {
    data: any;
}

export default function CrudBody({ data }: CrudBodyProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

    // Verificar que los datos no estén vacíos
    const headers = data.length > 0 ? Object.keys(data[0]).filter(header => !header.endsWith('id')) : [];
    const totalPages = Math.ceil(data.length / recordsPerPage);

    const handleClick = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className='white-container'>
                <table className='crud-table'>
                    <thead>
                        <tr className='text-lg'>
                            {headers.map((header) => (
                                <th key={header}>{header.toUpperCase()}</th>
                            ))}
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRecords.map((row: any) => (
                            <tr key={row.id}>
                                {headers.map((header) => (
                                    <td key={header}>{row[header]}</td>
                                ))}
                                <td></td>
                                <td>
                                    <button className="action-button" onClick={() => console.log('Edit', row.id)}>
                                        <FaEdit />
                                    </button>
                                    <button className="action-button" onClick={() => console.log('Delete', row.id)}>
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
