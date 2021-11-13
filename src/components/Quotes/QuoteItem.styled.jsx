import styled from 'styled-components';

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

export const FullScreenLink = styled.a`
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

export default QuoteItemLi;
