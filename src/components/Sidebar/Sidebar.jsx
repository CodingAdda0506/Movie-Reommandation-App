import React from 'react'
import { useGetGenresQuery } from '../../services/Api';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenre } from '../../Feature/currentGenre';
import genreIcons from '../../assets/genres';

const Sidebar = () => {
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  const { genreName } = useSelector((state) => state.currentGenre);

  return (
    <div>
      {isFetching || (
        data?.genres.map(({ name, id }) => (
          <Link key={id} value={id} className="text-white flex px-2 py-2 " onCl>
            <div className='flex' onClick={() => dispatch(selectGenre(id))}>
              <div>
                <img src={genreIcons[name.toLowerCase()]} width={30} height={30} className='text-white invert mr-5'/>
              </div>
              {name}
            </div>
          </Link>
        ))
      )}
    </div >
  )
}

export default Sidebar;