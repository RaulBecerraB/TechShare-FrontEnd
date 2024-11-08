import React from 'react'
import Categories from '@/components/AdminCrud/MaterialCatalog/Categories'
import SubCategories from '@/components/AdminCrud/MaterialCatalog/SubCategories'

export default function catalog() {
  return (
    <div>
      <div className='mb-6'>
        <SubCategories />
      </div>
      <Categories />
    </div>
  )
}