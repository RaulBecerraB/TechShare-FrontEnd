import React, { useState } from 'react';
import '@/styles/crud-table.css';
import '@/styles/pagination.css';
import { Rowdies } from 'next/font/google';
import { isDataEmpty, filterHeadersWithId } from '@/utils/utils';
import { renderTableHeaders, renderTableRows } from '@/utils/TableRenderer';

interface CrudBodyProps {
    data: any;
}

export default function CrudBody({ data }: CrudBodyProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;
    const totalPages = Math.ceil(data.length / recordsPerPage);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

    //we do not want to show the id in the table
    const headers = !isDataEmpty(data) ? filterHeadersWithId(data) : [];

    const handleClick = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        < div >
            <div className='white-container'>
                <table className='crud-table'>
                    <thead>
                        {renderTableHeaders(headers)}
                    </thead>
                    <tbody>
                        {renderTableRows(headers, currentRecords)}
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
        </div >
    );
}
