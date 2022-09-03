import { useState } from 'react';

export function AulaFormularioInput() {
  const [form, setForm] = useState({
    nome: 'teste',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(form.nome);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
    console.log(id, value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <button>Enviar</button>

      <p>{form.nome}</p>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Enviar</button>

      <p>{form.email}</p>
    </form>
  );
}
