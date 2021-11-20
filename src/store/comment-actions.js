import { commentActions } from './comment-slice';
import axios from 'axios';

export const sendComments = (allComments) => {
  return async (dispatch) => {
    (async () => {
      try {
        if (allComments.length === 0) {
          return;
        }
        await axios.put(
          'https://quotes-192d5-default-rtdb.firebaseio.com/allcomments.json',
          {
            allComments,
          }
        );
      } catch (error) {
        console.log(error);
      }
    })();
  };
};

export const getComments = () => {
  return async (dispatch) => {
    (async () => {
      try {
        const response = await axios.get(
          'https://quotes-192d5-default-rtdb.firebaseio.com/allcomments.json'
        );
        dispatch(
          commentActions.setComments({
            allComments: response.data.allComments || [],
          })
        );
      } catch (error) {
        console.log(error);
      }
    })();
  };
};
