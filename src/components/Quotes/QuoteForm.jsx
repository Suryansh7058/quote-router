import React, { useRef, useState } from 'react';
import Form, { Control, Actions, Loading } from './QuoteForm.styled';
import { Card } from '../UI/Card.styled';
import { Button } from '../UI/Buttons.styled';
import { LoadingSpinner } from '../UI/LoadingSpinner.styled';
import { Prompt } from 'react-router-dom';
import { useSelector } from 'react-redux';
const QuoteForm = (props) => {
  const [formFocus, setFormFocus] = useState(false);
  const isLoading = useSelector((state) => state.ui.isLoading);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const onFocusChangeHandler = () => {
    setFormFocus(true);
  };

  const finishEnteringHandler = () => {
    setFormFocus(false);
  };

  return (
    <React.Fragment>
      <Prompt
        when={formFocus}
        message={(location) =>
          'Are you sure you want to leave? All your entered data will be lost'
        }
      />
      <Card>
        <Form onFocus={onFocusChangeHandler} onSubmit={submitFormHandler}>
          {isLoading && (
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
            <Button onClick={finishEnteringHandler} type="submit">
              Add Quote
            </Button>
          </Actions>
        </Form>
      </Card>
    </React.Fragment>
  );
};

export default QuoteForm;
