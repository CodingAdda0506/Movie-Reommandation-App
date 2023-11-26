import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Movies from '../components/Movies/Movies';
import { useGetGenresQuery } from '../services/Api';

const Genre = () => {
  const { data } = useGetGenresQuery();

  return (
    <div className='flex justify-start'>
      <div className='w-[10%]'>
        <Sidebar />
      </div>
      <div className='w-[90%]'>
        <Movies movie={data} />
      </div>
    </div>
  )
}

export default Genre;