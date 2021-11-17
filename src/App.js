import { Route, Switch, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { sendQuotes, getQuotes } from './store/quote-actions';
import { useDispatch, useSelector } from 'react-redux';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound';
const App = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes.quotes);
  const totalQuotes = useSelector((state) => state.quotes.totalQuotes);

  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sendQuotes(quotes, totalQuotes));
  }, [quotes, totalQuotes, dispatch]);

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route exact path="/quotes">
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
};
export default App;
