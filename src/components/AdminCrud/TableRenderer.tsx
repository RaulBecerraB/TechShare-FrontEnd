import { FaEdit, FaTrash } from 'react-icons/fa';

interface TableRowsProps {
    headers: string[];
    currentRecords: any[];
    onDelete: (id: number) => void;
}

const TableRows: React.FC<TableRowsProps> = ({ headers, currentRecords, onDelete }) => {
    return (
        <>
            {currentRecords.map((row: any, rowIndex: number) => {
                // Obtiene el nombre del primer atributo de cada objeto
                const idKey = Object.keys(row)[0]; 
                const idValue = row[idKey]; // Toma el valor del primer atributo como ID

                return (
                    <tr key={`row-${idValue}-${rowIndex}`}>
                        {headers.map((header: string, headerIndex: number) => (
                            <td key={`${header}-${idValue}-${headerIndex}`}>{row[header]}</td>
                        ))}
                        <td key={`empty-td-${idValue}`} />
                        <td key={`actions-td-${idValue}`}>
                            <button className="action-button" onClick={() => console.log('Editing row with id:', idValue)}>
                                <FaEdit />
                            </button>
                            <button className="action-button" onClick={() => onDelete(idValue)}>
                                <FaTrash />
                            </button>
                        </td>
                    </tr>
                );
            })}
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
