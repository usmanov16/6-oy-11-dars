import axios from "axios";
import React, { useEffect, useState } from "react";

const URL = "https://json-api.uz/api/project/movies/movies";

function useGetData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(URL);

      if (response.status !== 200) {
        throw new Error("Xatolik yuz berdi");
      }
      console.log(response);
      

    //   const data = await response.json();
      setData(response);
      console.log(data);
    } catch (error) {
      setError(error.message)
    } finally {
        setLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { data, loading, error };
}

export default useGetData;
