import styled from 'styled-components';

const QuoteListUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Sorting = styled.div`
  padding-bottom: 1rem;
  border-bottom: 3px solid #b2d4d4;
  margin-bottom: 2rem;

  & button {
    font: inherit;
    color: teal;
    border: 1px solid teal;
    background-color: transparent;
    border-radius: 4px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
  }

  & button:hover {
    background-color: #c2fafa;
  }
`;

export default QuoteListUl;
