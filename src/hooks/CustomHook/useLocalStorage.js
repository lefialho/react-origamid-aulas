import { useEffect, useState } from 'react';
/* 
Deve começar sempre com a palavra use e pode ser retornado qualquer coisa como um
array, objeto ou valor único
*/
export function UseLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    const localStorage = window.localStorage.getItem(key);

    return localStorage ? localStorage : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
}
