export function ButtonModal({ modal, setModal }) {
  return (
    <button onClick={() => setModal(!modal)}>
      {modal ? 'Fechar Modal' : 'Abrir Modal'}
    </button>
  );
}
