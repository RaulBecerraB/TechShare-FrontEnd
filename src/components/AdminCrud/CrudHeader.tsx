"use client"
import React from 'react'
import '@/styles/containers.css'
import '@/styles/buttons.css'
import { inter } from '@/services/fonts'
import SearchBar from '@/components/SearchBar'
import Dropdown from '../Dropdown'
import Button from './Button'

const helloworld = () => console.log('Hello World')

interface CrudHeaderProps {
  title: string;
  buttonLabel: string;
}

const CrudHeader: React.FC<CrudHeaderProps> = ({ title, buttonLabel }) => {
  return (
    <div>
      <div className='white-container'>
        <p className={` ${inter.className} antialiased font-semibold `} style={{ color: '#1E2A5E', fontSize: '1.5rem' }}>
          {title}
        </p>
        <Button buttonLabel='hi' buttonFunction={helloworld} />
      </div>
      <div style={{ display: 'flex', gap: '40px' }}>
        <div style={{ width: '70%' }}>
          <SearchBar />
        </div>
        <div style={{ width: '30%' }}>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default CrudHeader;
