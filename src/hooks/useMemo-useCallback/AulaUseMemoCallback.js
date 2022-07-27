import { useCallback } from 'react';
import { useMemo, useState } from 'react';

function operation() {
  let c;
  for (let i = 0; i < 10000000; i++) {
    c = i + 1 / 10;
  }
  return c;
}

export function AulaUseMemoCallBack() {
  const [contar, setContar] = useState(0);
  const useMemoTest = useMemo(() => {
    const localStorageItem = window.localStorage.getItem('produto');
    console.log('Aconteceu o memo'); // Callback acontece apenas uma vez no useMemo
    return localStorageItem;
  }, []);
  console.log(useMemoTest); //

  const value = operation();
  console.log(value); // Operação lenta, pois está fora do useMemo

  const operationValue = useMemo(() => operation(), []);
  console.log(operationValue);

  const t1 = performance.now(); // Verifica performace da operação
  console.log(performance.now() - t1);

  const callBackTest = useCallback(() => {
    setContar((contar) => contar + 1);
  }, []); // Dessa forma não recria o componente várias vezes e cria o componente apenas uma vez

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
      <button onClick={callBackTest}>{contar}</button>
    </div>
  );
}
