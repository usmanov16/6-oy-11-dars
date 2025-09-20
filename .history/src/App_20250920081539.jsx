import React from 'react'

const URL = "https://jsonbek.uz/api/posts?style=comedy"

function App() {

  const getData = async () => {
   try {
    const response = await fetch(URL);

    if(!response.ok) {
      throw new Error("Xatolik yuz berdi")
    }

    const data = await response.json()
   } catch (error) {
    console.log(error);
    
   }
  }

  getData()
}

export default App