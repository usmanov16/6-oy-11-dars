import React, { useEffect, useState } from "react";
import useGetData from "./hooks/useGetData";

const URL = "https://jsonbek.uz/api/posts?style=comedy";

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
          <p>{obj.img}</p>
        </li>
      })}
    </ul>
  </div>;
}

export default App;
