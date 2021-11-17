import React from 'react';
import { useHistory } from 'react-router';
import QuoteForm from '../components/Quotes/QuoteForm';
import { useDispatch } from 'react-redux';
import { quoteActions } from '../store/quote-slice';
const NewQuote = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const addQuoteHandler = (quoteData) => {
    dispatch(
      quoteActions.addQuote({
        text: quoteData.text,
        author: quoteData.author,
      })
    );
    history.push('/quotes');
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
