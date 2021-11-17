import { useState } from 'react';
import NewCommentForm from './NewCommentForm';
import { Button } from '../UI/Buttons.styled';
import { CommentsSection } from './Comments.styled';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  console.log('In Comments');

  return (
    <CommentsSection>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <Button onClick={startAddCommentHandler}>Add a Comment</Button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </CommentsSection>
  );
};

export default Comments;
