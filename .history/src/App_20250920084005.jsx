import React from "react";

const URL = "https://jsonbek.uz/api/posts?style=comedy";

function App() {

  const 

  const getData = async () => {
    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Xatolik yuz berdi");
      }

      const data = await response.json();
      console.log(data);
      
    } catch (error) {
      console.log(error.message);
    }
  };

  getData();
  return <div>Salom</div>;
}

export default App;
