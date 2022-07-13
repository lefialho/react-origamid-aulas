import { useState } from 'react';
import { ButtonModal } from './Modal/ButtonModal';
import { Modal } from './Modal/Modal';

export function AulaUseState() {
  const [ativo, setAtivo] = useState(false);
  const [dados, setDados] = useState({ nome: 'Lele', idade: '36' });
  const [modal, setModal] = useState(false);

  function handleClick() {
    setAtivo(!ativo);
    setDados({
      ...dados,
      faculdade: 'Siimm tem facul',
    });
  }

  return (
    <div>
      <ul>
        <li>{dados.nome}</li>
        <li>{dados.idade}</li>
        <li>{dados.faculdade}</li>
      </ul>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>

      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <Modal setModal={setModal} modal={modal} />
      <ButtonModal setModal={setModal} modal={modal} />
    </div>
  );
}
