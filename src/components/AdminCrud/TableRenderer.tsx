import { FaEdit, FaTrash } from 'react-icons/fa';

interface TableRowsProps {
    headers: string[];
    currentRecords: any[];
}

const TableRows: React.FC<TableRowsProps> = ({ headers, currentRecords }) => {
    return (
        <>
            {currentRecords.map((row: any, rowIndex: number) => (
                <tr key={`row-${rowIndex}`}>
                    {headers.map((header: string, headerIndex: number) => (
                        <td key={`cell-${rowIndex}-${headerIndex}`}>{row[header]}</td>
                    ))}
                    <td key={`action-edit-${rowIndex}`}>
                        <button className="action-button" onClick={() => console.log('Edit', row.id)}>
                            <FaEdit />
                        </button>
                    </td>
                    <td key={`action-delete-${rowIndex}`}>
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
            {headers.map((header: string, index: number) => (
                <th key={`header-${index}`}>{header.toUpperCase()}</th>
            ))}
            <th />
            <th />
        </tr>
    );
};

export { TableRows, TableHeaders };
