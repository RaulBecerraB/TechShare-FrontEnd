"use client"; // This directive marks the file as a Client Component

import React from 'react';
import '@/styles/side-bar.css'; // Make sure to create and style this CSS file
import NavLinks from '@/components/SideNav/NavLinks';


const SideBar = () => {
    return (
        <div className="sidebar">
            <NavLinks />
        </div>
    );
};

export default SideBar;