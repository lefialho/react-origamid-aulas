import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const GlobalContext = createContext();

export function GlobalStorage({ children }) {
  const [data, setData] = useState(null);

  // async function getData() {
  //   const response = await fetch(
  //     'https://ranekapi.origamid.dev/json/api/produto/',
  //   );
  //   const json = await response.json();

  //   console.log(json);
  //   setData(json);
  // }

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  function cleanData() {
    setData(null);
  }

  return (
    <GlobalContext.Provider
      value={{
        name: 'Leandrinho',
        data,
        cleanData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
