import React from 'react'
import { useGetGenresQuery } from '../../services/Api';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenre } from '../../Feature/currentGenre';

const Sidebar = () => {
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  const { genreName } = useSelector((state) => state.currentGenre);

  return (
    <div>
      {isFetching || (
        data?.genres.map(({ name, id }) => (
          <Link key={id} value={id} className="text-white flex px-2 py-2 " onCl>
            <div onClick={() => dispatch(selectGenre(id))}>
              {name}
            </div>
          </Link>
        ))
      )}
    </div >
  )
}

export default Sidebar;