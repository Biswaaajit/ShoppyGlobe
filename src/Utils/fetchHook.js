import { useEffect, useState } from "react";

export function useFetch() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetching() {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        const fetchData = await res.json();
        setData(fetchData.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetching();
  }, []);

  return [data, isLoading, error];
}
