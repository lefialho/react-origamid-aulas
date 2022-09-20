import { useState } from 'react';
import { Checkbox } from './checkbox';
import { Input } from './input';
import { Radio } from './radio';
import { Select } from './select';
import { useForm } from './useForm';

export function FormComponents() {
  const [select, setSelect] = useState('Tablet');
  const [sexo, setSexo] = useState('Masculino');
  const [pagamento, setPagamento] = useState('Cartão');
  const [interesse, setInteresse] = useState(['Tecnologia']);
  const [termo, setTermo] = useState([]);
  const cep = useForm('cep');
  const email = useForm('email');
  const name = useForm();
  const surname = useForm(false);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [cep, setCep] = useState('');
  // const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (cep.validate() && email.validate() && name.validate()) {
      console.log('enviou');
    } else {
      console.log('Não enviou');
    }
    // if (validateCep(cep)) {
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Termos:</h2>
      <Checkbox
        options={['Li e aceito os termos']}
        value={termo}
        setValue={setTermo}
      />
      <h2>Sexo:</h2>
      <Radio
        options={['Masculino', 'Feminino']}
        value={sexo}
        setValue={setSexo}
      />
      <h2>Pagamento:</h2>
      <Radio
        options={['Cartão', 'Dinheiro', 'Pix']}
        value={pagamento}
        setValue={setPagamento}
      />
      <h2>Interesses</h2>
      <Checkbox
        options={['Saúde', 'Tecnologia', 'Culinária']}
        value={interesse}
        setValue={setInteresse}
      />
      <h2>Interesses</h2>
      <Select
        options={['Smartphone', 'Tablet', 'Notebook']}
        value={select}
        setValue={setSelect}
      />
      <Input type="text" label="Nome" id="nome" {...name} />
      <Input type="text" label="Sobrenome" id="sobrenome" {...surname} />
      <Input type="email" label="Email" id="email" {...email} />
      <Input
        type="text"
        label="Cep"
        id="cep"
        placeholder="00000-000"
        {...cep}
        // value={cep.value}
        // setValue={setCep}
        // onchange={handleChange}
        // onBlur={handleBlur}
      />
      {/* <Input
        type="text"
        id="nome"
        label="Nome"
        value={name}
        setValue={setName}
        required
      />
      <Input
        type="email"
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
      /> */}
      {/* {error && <p>{error}</p>} */}
      <button disabled={termo.length === 0}>Enviar</button>
    </form>
  );
}

// function handleChange({ target }) {
//   if (error) validateCep(target.value);
//   setCep(target.value);
// }

// function validateCep(value) {
//   if (value.length === 0) {
//     setError('Preencha um valor');
//     return false;
//   } else if (!/^\d{5}-?\d{3}$/.test(value)) {
//     setError('Preencha um CEP válido');
//     return false;
//   } else {
//     setError(null);
//     return true;
//   }
// }

// function handleBlur({ target }) {
//   validateCep(target.value);
//   console.log(validateCep(target.value));
//   const regex = /^\d{5}-?\d{3}$/;
//   const validacao = regex.test(target.value);
//   console.log(validacao);
// }
