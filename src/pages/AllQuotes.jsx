import React from 'react';
import QuoteList from '../components/Quotes/QuoteList';
import { useSelector } from 'react-redux';
const DUMMY_QUOTES = [
  { id: 'q1', author: 'Suryansh', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Suryansh Singh', text: 'Learning React is great!' },
];
const AllQuotes = () => {
  let quotes = useSelector((state) => state.quotes.quotes);
  let totalQuotes = useSelector((state) => state.quotes.totalQuotes);
  // console.log(totalQuotes);
  if (totalQuotes === 0 || totalQuotes === undefined) {
    quotes = DUMMY_QUOTES;
  }
  return (
    <div>
      <QuoteList quotes={quotes} />
    </div>
  );
};

export default AllQuotes;
