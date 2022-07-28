import { useState } from 'react';
import { createContext } from 'react';

export const GlobalContext = createContext();

export function GlobalStorage({ children }) {
  const [count, setCount] = useState(0);

  function sunByFour() {
    setCount((count) => count + 4);
  }

  function multiplyByTwo() {
    setCount((count) => count * 2);
  }

  return (
    <GlobalContext.Provider
      value={{
        name: 'Leandrinho',
        count,
        setCount,
        sunByFour,
        multiplyByTwo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
