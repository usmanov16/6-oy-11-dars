import React, { useEffect, useState } from "react";

const URL = "https://jsonbek.uz/api/posts?style=comedy";

function useGetData() {
  const [dataState, setData] = useState(null);
  const [error, setError] = useState(null)
  const 

  const getData = async () => {
    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Xatolik yuz berdi");
      }

      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { data };
}

export default useGetData;
