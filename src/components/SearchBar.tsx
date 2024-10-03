import React from 'react'
import Image from 'next/image'
import '@/styles/search-bar.css'
import '@/styles/containers.css'
import lupaIcon from '/src/assets/icons/lupa.svg'


export default function SearchBar() {
  return (
    <div className='input-container'>
      <input type="text" className="search-bar" placeholder="Search"></input>
      <Image src={lupaIcon} 
      width={20}
      height={20} 
      alt="Search Icon"
      className='search-bar-icon' />
    </div>
  )
}
