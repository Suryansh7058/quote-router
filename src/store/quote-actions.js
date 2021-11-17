import { quoteActions } from './quote-slice';
import axios from 'axios';

//update quote list using reducers and then send the data whenever quotelist changes from App.js using useSelector

export const sendQuotes = (quotes, totalQuotes) => {
  return async (dispatch) => {
    const sendQuoteData = async () => {
      if (totalQuotes === 0 || totalQuotes === undefined) {
        return;
      }

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
    };
    sendQuoteData();
  };
};

export const getQuotes = () => {
  return async (dispatch) => {
    (async () => {
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
        //pass
      }
    })();
  };
};
