import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

export function Clean() {
  const { cleanData } = useContext(GlobalContext);

  return <button onClick={cleanData}>Clean Data</button>;
}
