import { FaEdit, FaTrash } from 'react-icons/fa';

export const renderTableRows = (headers: any, currentRecords: any) => {
    return currentRecords.map((row: any) => (
        <tr key={row.id}>
            {headers.map((header: any) => (
                <td key={header + row.id}>{row[header]}</td>
            ))}
            <td />
            <td>
                <button className="action-button" onClick={() => console.log('Edit', row.id)}>
                    <FaEdit />
                </button>
                <button className="action-button" onClick={() => console.log('Delete', row.id)}>
                    <FaTrash />
                </button>
            </td>
        </tr>
    ));
}

export const renderTableHeaders = (headers: string[]) => {
    return (
        <tr className='text-lg'>
            {headers.map((header: string) => (
                <th key={header}>{header.toUpperCase()}</th>
            ))}
            <th />
            <th />
        </tr>
    )
}