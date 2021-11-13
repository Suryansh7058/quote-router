import React from 'react';
import QuoteList from '../components/Quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Suryansh', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Suryansh Singh', text: 'Learning React is great!' },
];
const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
};

export default AllQuotes;
