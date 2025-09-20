import React, { useEffect, useState } from "react";
import useGetData from "./hooks/useGetData";

const URL = "https://jsonbek.uz/api/posts?style=comedy";

function App() {
 
  const data = useGetData()
  console.log(data);
  
  
  return <div>Salom</div>;
}

export default App;
