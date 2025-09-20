import React, { useState } from "react";

const URL = "https://jsonbek.uz/api/posts?style=comedy";

function App() {

  const [dataState, setData] = useState(null)

  const getData = async () => {
    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Xatolik yuz berdi");
      }

      const data = await response.json();
      setData(dataState)
      
    } catch (error) {
      console.log(error.message);
    }
  };

  getData();
  return <div>Salom</div>;
}

export default App;
