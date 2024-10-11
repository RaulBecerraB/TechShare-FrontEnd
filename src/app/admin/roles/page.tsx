"use client"
import React, {useEffect,useState} from 'react'
import CrudHeader from '@/components/AdminCrud/CrudHeader'
import CrudBody from '@/components/AdminCrud/CrudBody'

export default function roles() {

  const [data, setData] = useState<any>([]);

  const dataUrl = '/dummyUsers.json'

  const fetchData = async () => {
    try {
      const response = await fetch(dataUrl);
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchData();
  }, [dataUrl]);

  return (
    <div>
      <CrudHeader title='Roles' buttonLabel='AÑADIR ROL' buttonFunction={() => alert('Adding role')} />
      <CrudBody data={data} />
    </div>
  )
}