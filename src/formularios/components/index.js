import { useState } from 'react';
import { Input } from './input';
import { Select } from './select';

export function FormComponents() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [select, setSelect] = useState('');

  return (
    <form action="">
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
      <button>Enviar</button>
    </form>
  );
}
