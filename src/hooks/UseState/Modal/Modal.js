export function Modal({ modal, setModal }) {
  if (modal)
    return (
      <div>
        Meu Modalll... <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
}
