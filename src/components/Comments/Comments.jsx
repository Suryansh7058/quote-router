import { useState } from 'react';
import NewCommentForm from './NewCommentForm';
import { Button } from '../UI/Buttons.styled';
import { CommentsSection } from './Comments.styled';
import { useSelector } from 'react-redux';
import CommentsList from './CommentsList';
const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const allComments = useSelector((state) => state.comments.allComments);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  let comments = allComments
    .slice()
    .find((comment) => comment.quoteId === props.quoteId);

  if (!comments) {
    comments = { comments: ['No Comments Found for this Quote'] };
  }
  const hideCommentsForm = () => {
    setIsAddingComment(false);
  };
  return (
    <CommentsSection>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <Button onClick={startAddCommentHandler}>Add a Comment</Button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={props.quoteId} hideForm={hideCommentsForm} />
      )}
      <CommentsList comments={comments.comments} />
    </CommentsSection>
  );
};

export default Comments;
