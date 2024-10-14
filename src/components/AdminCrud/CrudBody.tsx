import React, { useState } from 'react';
import '@/styles/crud-table.css';
import '@/styles/pagination.css';
import { Rowdies } from 'next/font/google';
import { isDataEmpty, filterHeadersWithId } from '@/utils/utils';
import { TableHeaders, TableRows } from '@/components/AdminCrud/TableRenderer';
import Pagination from '@/components/AdminCrud/Pagination';

export default function CrudBody({ data }: any) {
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
                        <TableHeaders headers={headers} />
                    </thead>
                    <tbody>
                        <TableRows headers={headers}
                            currentRecords={currentRecords} />
                    </tbody>
                </table>
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handleClick}
            />
        </div >
    );
}
