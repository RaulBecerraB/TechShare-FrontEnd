import React from 'react'
import Image from 'next/image'
import '@/styles/dropdown.css'
import '@/styles/containers.css'
import filterIcon from '/src/assets/icons/filter.svg'

export default function Dropdown() {
  return (
    <div>
    <div className='input-container'>
      <select className='dropdown'>
        <option value="" disabled selected>Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <Image 
      src={filterIcon}
      width={20}
      height={20} 
      alt="Dropdown" 
      className='dropdown-icon' />
    </div>
    </div>
  )
}
