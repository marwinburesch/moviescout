import { useEffect, useState } from 'react';

export default function useFetch<T>(url: string): {
  data: T | null;
  errorMessage: string | null;
  isLoading: boolean;
  refetch: () => void;
} {
  const [data, setData] = useState<T | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isLoading = data === null;

  function refetch() {
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setErrorMessage);
  }

  useEffect(() => {
    refetch();
  }, [url]);
  return { data, errorMessage, isLoading, refetch };
}
