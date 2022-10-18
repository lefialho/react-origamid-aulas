import { useMemo, useState } from 'react';
import { Header } from './Header';

// useMemo é importante para que o componente seja renderizado
// apenas uma vez na alteração de estado
// Bom para Header por exemplo, que geralmente não precisa ser reativo

export function AulaMemo() {
  const [contar, setContar] = useState(0);
  const memorizedHeader = useMemo(() => <Header />, []);

  return (
    <div>
      {/* <Header /> */}
      {memorizedHeader}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
}
