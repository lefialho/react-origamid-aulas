// import Contato from './Contato';

// Lazy e Suspense servem para carregar libs, vídeos ou outros arquivos pesados
// que não precisam serem carregados em todas páginas
// Ex: Um jquery que está em apenas uma página e carregam somente quando faz a requisição

import React, { lazy, Suspense } from 'react';
const Contato = lazy(() => import('./Contato'));

export function AulaLazySuspense() {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      {ativo && (
        <Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </Suspense>
      )}
      <button onClick={() => setAtivo(true)}>Ativar</button>
    </div>
  );
}
