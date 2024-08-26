import { useState, useEffect } from "react";
import axios from "axios";
// npm install axios

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const fetchData = async () => {
    try {
      let res = await axios.get(url);
      setData(res.data);
    } catch (e) {
      setError(e.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return [data, error];
}

export default useFetch;
