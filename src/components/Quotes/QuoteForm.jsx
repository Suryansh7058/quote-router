import { useRef } from 'react';
import Form, { Control, Actions, Loading } from './QuoteForm.styled';
import { Card } from '../UI/Card.styled';
import { Button } from '../UI/Buttons.styled';
import { LoadingSpinner } from '../UI/LoadingSpinner.styled';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <Card>
      <Form onSubmit={submitFormHandler}>
        {props.isLoading && (
          <Loading>
            <LoadingSpinner />
          </Loading>
        )}

        <Control>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </Control>
        <Control>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </Control>
        <Actions>
          <Button>Add Quote</Button>
        </Actions>
      </Form>
    </Card>
  );
};

export default QuoteForm;
