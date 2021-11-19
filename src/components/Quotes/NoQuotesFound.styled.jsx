import styled from 'styled-components';
export const NoQuotes = styled.div`
  height: 20rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    color: #262c2c;
    font-size: 3rem;
    font-weight: bold;
  }
`;

export const AddQuoteLink = styled.a`
  cursor: pointer;
  font: inherit;
  color: #262c2c;
  font-size: 3rem;
  font-weight: bold;
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
