import React from 'react'
import { useGetGenresQuery } from '../../services/Api';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  const { genreName } = useSelector((state) => state.currentGenre);
  // const navigate = useNavigate();

  return (
    <div>
      {isFetching || (
        data?.genres.map(({ name, id }) => (
          <Link key={id} value={id} className="text-white flex" >
            <div onClick={() => dispatch(selectGenre(id))}>
            </div>
            {name}
          </Link>
        ))
      )}
    </div >
  )
}

export default Sidebar;