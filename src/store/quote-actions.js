import { quoteActions } from './quote-slice';
import { uiActions } from './ui-slice';
import axios from 'axios';

export const sendQuotes = (quotes, totalQuotes) => {
  return async (dispatch) => {
    const sendQuoteData = async () => {
      if (totalQuotes === 0 || totalQuotes === undefined) {
        return;
      }
      dispatch(uiActions.setIsLoading());

      try {
        await axios.put(
          'https://quotes-192d5-default-rtdb.firebaseio.com/quotes.json',
          {
            quotes: quotes,
            totalQuotes: totalQuotes,
          }
        );
      } catch (error) {
        console.log(error);
      }
      dispatch(uiActions.setStopLoading());
    };
    sendQuoteData();
  };
};

export const getQuotes = () => {
  return async (dispatch) => {
    (async () => {
      dispatch(uiActions.setIsLoading());
      try {
        const response = await axios.get(
          'https://quotes-192d5-default-rtdb.firebaseio.com/quotes.json'
        );
        // console.log(response.data.quotes, response.data.totalQuotes);
        dispatch(
          quoteActions.setQuotes({
            quotes: response.data.quotes || [],
            totalQuotes: response.data.totalQuotes,
          })
        );
      } catch (error) {
        dispatch(uiActions.setError({ error: true }));
      }
      dispatch(uiActions.setStopLoading());
    })();
  };
};
