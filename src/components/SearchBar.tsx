import React from 'react'
import '@/styles/search-bar.css'

export default function SearchBar() {
  return (
    <div>
      <input type="text" className="search-input" placeholder="Search" />
      <i className="search-icon">&#128269;</i>
    </div>
  )
}
