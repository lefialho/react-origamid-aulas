import { useCallback } from 'react';
import { useState } from 'react';

export function UseFetch() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // Use callback para renderizar apenas uma vez e evitar looping infinito
  const request = useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);
      setLoading(false);
      response = await fetch(url, options);
      json = await response.json();
    } catch (error) {
      json = null;
      setError('Endereço não encontrado');
    } finally {
      setData(json);
      setLoading(false);
      return {
        response,
        json,
      };
    }
  }, []);

  return {
    data,
    error,
    loading,
    request,
  };
}
