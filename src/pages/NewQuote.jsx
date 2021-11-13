import React from 'react';
import QuoteForm from '../components/Quotes/QuoteForm';
const NewQuote = (props) => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
