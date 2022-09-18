import { useState } from 'react';
import { Checkbox } from './checkbox';
import { Input } from './input';
import { Radio } from './radio';
import { Select } from './select';

export function FormComponents() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [select, setSelect] = useState('Tablet');
  const [sexo, setSexo] = useState('Masculino');
  const [pagamento, setPagamento] = useState('Cartão');
  const [interesse, setInteresse] = useState(['Tecnologia']);
  const [termo, setTermo] = useState([]);

  return (
    <form action="">
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
      <Input
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
      />
      <button disabled={termo.length === 0}>Enviar</button>
    </form>
  );
}
