import { useParams, Route, useHistory } from 'react-router';
import Comments from '../components/Comments/Comments';
import HighlightedQuote from '../components/Quotes/HighlightedQuote';
import { StyledLinkFlat } from '../NavLink';
import { useRouteMatch } from 'react-router';
import { useSelector } from 'react-redux';

const QuoteDetail = () => {
  const params = useParams();
  console.log(params);
  const history = useHistory();
  const match = useRouteMatch();
  const allQuotes = useSelector((state) => state.quotes.quotes);
  const quote = allQuotes.slice().find((quote) => quote.id === +params.quoteId);
  console.log(quote);

  if (quote === undefined) {
    history.push('/*');
    return <p>Not Found</p>;
  }
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route exact path={match.path}>
        <div className="centered">
          <StyledLinkFlat to={`${match.url}/comments`}>
            Load Comments
          </StyledLinkFlat>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
