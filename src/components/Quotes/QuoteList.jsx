import { Fragment } from 'react';
import QuoteItem from './QuoteItem';
import QuoteListUl, { Sorting } from './QuoteList.styled';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: match.path,
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
    });
    // history.push(`${match.url}?sort=${isSortingAscending ? 'desc' : 'asc'}`);
  };
  return (
    <Fragment>
      <Sorting>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </Sorting>
      <QuoteListUl>
        {sortedQuotes.map((quote) => (
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
