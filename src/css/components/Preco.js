import styled from 'styled-components';

export const Price = styled.p`
  /* background: ${({ color }) => color}; */
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: white;
`;
