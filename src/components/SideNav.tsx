"use client"; // This directive marks the file as a Client Component

import React from 'react';
import '@/styles/side-bar.css'; // Make sure to create and style this CSS file

interface SideBarProps {
    items: string[];
    onItemSelect: (item: string) => void;
}

const SideNav: React.FC<SideBarProps> = ({ items, onItemSelect }) => {
    return (
        <div>
            <ul>
                {items.map((item: string, index: number) => (
                    <li key={index} onClick={() => onItemSelect(item)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideNav;