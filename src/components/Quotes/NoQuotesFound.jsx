import { NoQuotes, AddQuoteLink } from './NoQuotesFound.styled';

const NoQuotesFound = () => {
  return (
    <NoQuotes>
      <p>No quotes found!</p>
      <AddQuoteLink>Add a Quote</AddQuoteLink>
    </NoQuotes>
  );
};

export default NoQuotesFound;
