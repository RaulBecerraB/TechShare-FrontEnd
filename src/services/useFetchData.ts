import { useState, useEffect } from 'react';

export function useFetchData<T>(dataUrl: string) {
  const [data, setData] = useState<T[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(dataUrl);
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dataUrl]);

  return { data};
}