import React from 'react';
import { useParams, Route } from 'react-router';
import Comments from '../components/Comments/Comments';
import HighlightedQuote from '../components/Quotes/HighlightedQuote';
const DUMMY_QUOTES = [
  { id: 'q1', author: 'Suryansh', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Suryansh Singh', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote Found</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
