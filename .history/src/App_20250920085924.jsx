import React, { useEffect, useState } from "react";
import useGetData from "./hooks/useGetData";

const URL = "https://jsonbek.uz/api/posts?style=comedy";

function App() {
 
  const {data, error, loading} = useGetData()

  if(loading) {
    return <h1>Loading...</h1>
  }
  
  
  return <div>Salom</div>;
}

export default App;
