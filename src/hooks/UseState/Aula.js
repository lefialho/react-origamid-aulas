import { useState } from 'react';
import { ExercicioUseState } from './Exercicio/ExercicioUseState';
import { ButtonModal } from './Modal/ButtonModal';
import { Modal } from './Modal/Modal';
import { UseStateLesson } from './UseState';

export function AulaUseState() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <UseStateLesson />
      <Modal setModal={setModal} modal={modal} />
      <ButtonModal setModal={setModal} modal={modal} />
      <ExercicioUseState />
    </div>
  );
}
