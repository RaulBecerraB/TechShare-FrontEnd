import { FaEdit, FaTrash } from 'react-icons/fa';

interface CardRendererProps {
    currentRecords: any[];
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

const CardRenderer: React.FC<CardRendererProps> = ({ currentRecords, onDelete, onEdit }) => {
    return (
        <div className="flex flex-wrap gap-6 justify-around">
            {currentRecords.map((item, index) => {
                const idKey = Object.keys(item)[0];
                const idValue = item[idKey];

                return (
                    <div key={`card-${idValue}-${index}`} className="bg-white rounded-lg shadow-lg w-80 p-4 flex items-start space-x-4 relative">
                        {item.imageUrl ? (
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-md border border-gray-300"
                                onError={(e) => {
                                    e.currentTarget.src = "/fallback-image.png"; // Reemplaza con una imagen de respaldo en caso de error
                                }}
                            />
                        ) : (
                            <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                                <span className="text-gray-500">No Image</span>
                            </div>
                        )}
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h3>
                            <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                        </div>
                        <div className="absolute top-2 right-2 flex space-x-2">
                            <button
                                className="action-button"
                                onClick={() => onEdit(idValue)}
                            >
                                <FaEdit />
                            </button>
                            <button
                                className="action-button"
                                onClick={() => onDelete(idValue)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardRenderer;
