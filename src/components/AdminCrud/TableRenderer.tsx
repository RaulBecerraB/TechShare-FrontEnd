import { FaEdit, FaTrash } from 'react-icons/fa';

interface TableRowsProps {
    headers: string[];
    currentRecords: any[];
}

const TableRows: React.FC<TableRowsProps> = ({ headers, currentRecords }) => {
    return (
        <>
            {currentRecords.map((row: any, rowIndex: number) => (
                <tr key={`row-${row.id}-${rowIndex}`}>
                    {headers.map((header: string, headerIndex: number) => (
                        <td key={`${header}-${row.id}-${headerIndex}`}>{row[header]}</td>
                    ))}
                    <td key={`empty-td-${row.id}`} />
                    <td key={`actions-td-${row.id}`}>
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
            {headers.map((header: string, index: number) => (
                <th key={`${header}-${index}`}>{header.toUpperCase()}</th>
            ))}
            <th key="empty-th-1" />
            <th key="empty-th-2" />
        </tr>
    );
};

export { TableRows, TableHeaders };
