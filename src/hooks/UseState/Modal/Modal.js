export function Modal({ modal, setModal }) {
  if (modal)
    return (
      <section>
        <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
        Meu Modalll... <button onClick={() => setModal(false)}>Fechar</button>
      </section>
    );
}
