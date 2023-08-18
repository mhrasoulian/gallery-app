import { useState, useEffect } from "react";

function useFetch(url: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data, url]);

  return [data];
}

export default useFetch;
