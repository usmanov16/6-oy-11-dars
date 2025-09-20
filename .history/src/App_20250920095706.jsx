import React, { useEffect, useState } from "react";
import useGetData from "./hooks/useGetData";

const URL = "https://json-api.uz/api/project/movies/movies";

function App() {
 
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

export default App;
