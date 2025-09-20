import React from 'react'
import useGetData from '../hooks/useGetData';

function Home() {
    const {data, error, loading} = useGetData()

  if(loading) {
    return <span className="loading loading-dots loading-lg"></span>
  }
  
  
  return <div>
    <ul>
      {data && data.map((obj) => {
        return <li key={obj.id}>
          <h2>{obj.title}</h2>
          <p>{obj.author}</p>
        </li>
      })}
    </ul>
  </div>;
}

export default Home