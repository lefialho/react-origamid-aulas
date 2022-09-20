import { useState } from 'react';

const validationTypes = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
};

export function useForm(validationType) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function validateForm(value) {
    if (validationType === false) return true; // Validação para campos não obrigtatórios
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (
      validationTypes[validationType] &&
      !validationTypes[validationType].regex.test(value)
    ) {
      setError(validationTypes[validationType].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onchange({ target }) {
    if (error) validateForm(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onchange,
    onBlur: () => validateForm(value),
    validate: () => validateForm(value),
  };
}
