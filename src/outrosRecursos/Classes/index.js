import { useState } from 'react';
import Produtos from './Produtos';

export function AulaClasses() {
  const [ativar, setAtivar] = useState(true);

  return (
    <div>
      {ativar && <Produtos titulo="Esses são os" />}
      <button onClick={() => setAtivar(!ativar)}>Toggle</button>
    </div>
  );
}
