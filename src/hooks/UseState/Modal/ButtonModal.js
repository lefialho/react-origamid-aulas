export function ButtonModal({ modal, setModal }) {
  return (
    <button style={{ marginTop: '2rem' }} onClick={() => setModal(!modal)}>
      {modal ? 'Fechar Modal' : 'Abrir Modal'}
    </button>
  );
}
