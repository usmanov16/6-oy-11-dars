import React from 'react'
import useGetData from '../hooks/useGetData';
import { Link } from 'react-router-dom';

function Home() {
    const {data, error, loading} = useGetData()

  if(loading) {
    return <span className="loading loading-dots loading-lg"></span>
  }
  
  
  return <div>
    <ul>
      {data && data.map((obj) => {
        return <li key={obj.id}>
          <Link to={"/movie"}>{}</Link>
       
        </li>
      })}
    </ul>
  </div>;
}

export default Home