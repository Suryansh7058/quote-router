import styled from 'styled-components';
import { Link } from 'react-router-dom';
const QuoteItemLi = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: #c2e7f0;

  &:last-of-type {
    border-bottom: none;
  }

  & figure {
    margin: 0;
    padding: 0;
    width: 70%;
  }

  & blockquote {
    margin: 0;
    text-align: left;
    font-size: 1.5rem;
    color: #212929;
  }

  & p {
    margin: 0;
    margin-bottom: 0.25rem;
  }

  & figcaption {
    font-style: italic;
    color: #566d6d;
  }
`;

export const FullScreenLink = styled(Link)`
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

export default QuoteItemLi;
