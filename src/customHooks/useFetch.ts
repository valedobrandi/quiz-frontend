import { useState, useEffect } from 'react';

const useFetch = (http: string) => {
  const [data, setData] = useState("");


  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(http);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
    };

    fetchData();
  }, []);

  return { data};
};

export default useFetch;