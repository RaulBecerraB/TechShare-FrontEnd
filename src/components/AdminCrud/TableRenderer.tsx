import { FaEdit, FaTrash } from 'react-icons/fa';

interface TableRowsProps {
    headers: string[];
    currentRecords: any[];
}

const TableRows: React.FC<TableRowsProps> = ({ headers, currentRecords }) => {
    return (
        <>
            {currentRecords.map((row: any) => (
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
            ))}
        </>
    );
};

interface TableHeadersProps {
    headers: string[];
}

const TableHeaders: React.FC<TableHeadersProps> = ({ headers }) => {
    return (
        <tr className='text-lg'>
            {headers.map((header: string) => (
                <th key={header}>{header.toUpperCase()}</th>
            ))}
            <th />
            <th />
        </tr>
    );
};

export { TableRows, TableHeaders };