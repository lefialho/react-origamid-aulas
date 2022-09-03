// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

import { useState } from "react";

export function ExercicioFormularioInput() {
  const forms = formFields.reduce((acc, field) => {
    // console.log(acc);
    return {
      ...acc,
      [field.id]: '',
    };
  }, {})

  const [response, setResponse] = useState(null);
  const [form, setForm] = useState(forms);
  // const [form, setForm] = useState({
  //   nome: '',
  //   email: '',
  //   senha: '',
  //   cep: '',
  //   rua: '',
  //   numero: '',
  //   bairro: '',
  //   cidade: '',
  //   estado: '',
  // });


  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then(response => {
      setResponse(response)
      // console.log(response)
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formFields.map(({ id, label, type }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
            ></input>
          </div>
          ))}

        <button>Enviar</button>
      </form>

      {response && response.ok && <p>Enviado com sucesso</p>}
      {response && !response.ok && <p>Não foi enviado</p>}
    </>
  )
}

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'number',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  }
]
