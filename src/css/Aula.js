import './App.css';
import { Produto } from './components/Produto';
import { Title } from './Title';
import styled from 'styled-components';
import { Price } from './components/Preco';
import { useState } from 'react';

const ProductContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const Product = styled.div`
  flex: 1;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: tomato;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 1rem;
`;

const Buy = styled.button`
  font-size: 1.2rem;
  margin-top: 1rem;
  text-transform: uppercase;
  border: 2px solid var(--color);
  background: transparent;
  color: var(--color);
  transform: scale(${({ active }) => (active ? '1.2' : '1')});
  transition: all 0.3s;

  &:hover,
  &:active,
  &:focus-within {
    background: var(--color);
    color: white;
  }
`;

export function AulaCSS() {
  const [active, setActive] = useState(false);

  return (
    <>
      <ProductContainer>
        <Product>
          {' '}
          <div className="container">
            <Title />
          </div>
          <Subtitle>Subtítulo</Subtitle>
          <Paragraph>Texto estilizado com styled-components</Paragraph>
          <Price color="var(--color)">R$ 10.000,00</Price>
          <Buy active={active} onClick={() => setActive(!active)}>
            Compre aqui
          </Buy>
          <Produto />
        </Product>
        <Product>
          {' '}
          <div className="container">
            <Title />
          </div>
          <Subtitle>Subtítulo</Subtitle>
          <Paragraph>Texto estilizado com styled-components</Paragraph>
          <Price color="var(--color)">R$ 10.000,00</Price>
          <Buy active={active} onClick={() => setActive(!active)}>
            Compre aqui
          </Buy>{' '}
          <Produto />
        </Product>
      </ProductContainer>
    </>
  );
}
