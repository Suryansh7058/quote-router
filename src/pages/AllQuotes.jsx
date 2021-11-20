import React from 'react';
import QuoteList from '../components/Quotes/QuoteList';
import { useSelector } from 'react-redux';
import NotFound from './NotFound';
import { LoadingSpinner } from '../components/UI/LoadingSpinner.styled';
const AllQuotes = () => {
  let quotes = useSelector((state) => state.quotes.quotes);
  const isLoading = useSelector((state) => state.ui.isLoading);
  // const error = useSelector((state) => state.ui.error);

  let totalQuotes = useSelector((state) => state.quotes.totalQuotes);

  if (!isLoading && (totalQuotes === 0 || totalQuotes === undefined)) {
    return <NotFound zero={true} />;
  }
  return (
    <div>
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && <QuoteList quotes={quotes} />}
    </div>
  );
};

export default AllQuotes;
