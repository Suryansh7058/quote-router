import { useRef } from 'react';
import { Form, Controls, Actions } from './NewCommentForm.styled';
import { Button } from '../UI/Buttons.styled';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
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
