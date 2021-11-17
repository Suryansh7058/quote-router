import CommentItem from './CommentItem';
import { CommentsListUl } from './CommentsList.styled';
const CommentsList = (props) => {
  return (
    <CommentsListUl>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </CommentsListUl>
  );
};

export default CommentsList;
