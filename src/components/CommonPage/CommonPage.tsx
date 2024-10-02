import React from 'react'
import '@/styles/containers.css'
import '@/styles/buttons.css'
import {inter} from '@/services/fonts'
import SearchBar from '@/components/SearchBar'

export default function CommonPage() {
  return (
    <div>
        <div className='white-container'>
        <p className={` ${inter.className} antialiased font-semibold `} style={{ color: '#1E2A5E', fontSize: '1.5rem' }}>
            Sample
        </p>
        <button className='button'>
            Button
        </button>
        </div>
        <SearchBar/>
        
    </div>
  )
}
