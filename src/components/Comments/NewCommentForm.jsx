import { useRef } from 'react';
import { Form, Controls, Actions } from './NewCommentForm.styled';
import { Button } from '../UI/Buttons.styled';
import { useDispatch } from 'react-redux';
import { commentActions } from '../../store/comment-slice';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const dispatch = useDispatch();
  console.log(props.quoteId);
  const submitFormHandler = (event) => {
    event.preventDefault();
    if (commentTextRef.current.value.trim().length === 0) {
      props.hideForm();
      return;
    }
    dispatch(
      commentActions.addComment({
        quoteId: props.quoteId,
        comment: commentTextRef.current.value,
      })
    );
    commentTextRef.current.value = '';
    props.hideForm();
  };

  return (
    <Form onSubmit={submitFormHandler}>
      <Controls onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </Controls>
      <Actions>
        <Button type="submit">Add Comment</Button>
      </Actions>
    </Form>
  );
};

export default NewCommentForm;
