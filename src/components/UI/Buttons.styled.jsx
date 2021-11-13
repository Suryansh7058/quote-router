import styled from 'styled-components';

export const Button = styled.button`
  text-decoration: none;
  background-color: teal;
  color: white;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  border: 1px solid teal;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #11acac;
    border-color: #11acac;
  }
`;
export const ButtonFlat = styled.button`
  cursor: pointer;
  font: inherit;
  color: teal;
  border: none;
  background-color: none;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;

  &:hover,
  &:active {
    background-color: teal;
    color: white;
  }
`;
