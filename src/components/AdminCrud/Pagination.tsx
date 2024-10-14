// src/components/Pagination.tsx
import React from 'react';
import '@/styles/pagination.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handleClick = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
        }
    };

    return (
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
    );
};

export default Pagination;
