import { useState, useEffect } from 'react';

export default function useFetch<T>(url: string): {
  data: T | null;
  isLoading: boolean;
  errorMessage: string | null;
  refetch: () => void;
} {
  const [data, setData] = useState<T | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isLoading = data === null;

  function refetch() {
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch((error) => setErrorMessage(error.toString()));
  }

  useEffect(() => {
    refetch();
  }, [url]);

  return { data, isLoading, errorMessage, refetch };
}
