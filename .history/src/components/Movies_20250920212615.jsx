import React from 'react'
import { Link } from 'react-router-dom';
import useGetData from '../hooks/useGetData';

function Movies() {
    const {data, error, loading} = useGetData()

    if(loading) {
      return <span className="loading loading-dots loading-lg"></span>
    }
    
    
    return <div>
      <ul className='grid gridc'>
        {data && data.map((obj) => {
          return <li key={obj.id}>
            <Link to={"/movie"}>{obj.title}</Link>
         
          </li>
        })}
      </ul>
    </div>;
}

export default Movies