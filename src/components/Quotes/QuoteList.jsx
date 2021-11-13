import { Fragment } from 'react';
import QuoteItem from './QuoteItem';
import QuoteListUl from './QuoteList.styled';

const QuoteList = (props) => {
  return (
    <Fragment>
      <QuoteListUl>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </QuoteListUl>
    </Fragment>
  );
};

export default QuoteList;
