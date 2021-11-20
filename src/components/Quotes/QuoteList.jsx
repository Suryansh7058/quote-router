import { Fragment } from 'react';
import QuoteItem from './QuoteItem';
import QuoteListUl, { Sorting } from './QuoteList.styled';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

const sortQuotes = (quotes, ascending) => {
  //TODO READ THE FOLLOWING COMMENTS

  // Redux Toolkit freezes the object and hence it does not allow modification of the array or any other state outside the reducer hence we should slice() the array since creating a new array like const arr = props.quotesArray will create a reference object hence it will be blocked too so we should use slice() to create a copy of the array

  // * https://github.com/reduxjs/redux-toolkit/issues/839
  // !immer will still freeze your returned object unless you have already frozen it
  // ?Why does immer freezes a state (returned from slice) as I know nobody is changing the state. We want to prevent state mutations inside slice, right, why after returning of state?
  // * in your component:
  // * const someList = useSelector((state) => state.posts);
  // *someList.sort(); // this line would mutate your state

  //TODO READ THE ABOVE COMMENTS

  const sortedArray = quotes.slice().sort((quoteA, quoteB) => {
    const A = quoteA.id;
    const B = quoteB.id;
    if (ascending) {
      return A - B;
    } else {
      return B - A;
    }
    // return quoteA - quoteB;
  });

  return sortedArray;
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get('sort') === 'asc';
  const { quotes: allQuotes } = props;
  const sortedQuotes = sortQuotes(allQuotes, isSortingAscending);
  // console.log(sortedQuotes);

  const changeSortingHandler = () => {
    history.push({
      pathname: match.path,
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
    });
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
