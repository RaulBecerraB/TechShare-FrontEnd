"use client";

import React from 'react';
import SideBar from '@/components/SideNav';

const items = ['Item 1', 'Item 2', 'Item 3'];

const ClientSideBar: React.FC = () => {
    const handleItemSelect = (item: string) => {
        console.log('Selected item:', item);
    };

    return <SideBar items={items} onItemSelect={handleItemSelect} />;
};

export default ClientSideBar;