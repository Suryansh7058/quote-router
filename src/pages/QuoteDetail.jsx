import { useParams, Route, useHistory } from 'react-router';
import Comments from '../components/Comments/Comments';
import HighlightedQuote from '../components/Quotes/HighlightedQuote';
import { StyledLinkFlat } from '../NavLink';
import { useRouteMatch } from 'react-router';
const DUMMY_QUOTES = [
  { id: 'q1', author: 'Suryansh', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Suryansh Singh', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
  const params = useParams();
  const history = useHistory();
  const match = useRouteMatch();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    history.replace('/*');
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
