import React from 'react'

const URL = "https://jsonbek.uz/api/posts?style=comedy"

function App() {

  const getData = async () => {
    const response = await fetch(URL);

    if(!response.ok) {
      throw new Error("Xatolik yuz berdi")
    }

    const data = await res
  }

  
}

export default App