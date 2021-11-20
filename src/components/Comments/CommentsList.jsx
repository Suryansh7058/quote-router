import CommentItem from './CommentItem';
import { CommentsListUl } from './CommentsList.styled';
const CommentsList = (props) => {
  return (
    <CommentsListUl>
      {props.comments.map((comment, index) => (
        <CommentItem key={index} text={comment} />
      ))}
    </CommentsListUl>
  );
};

export default CommentsList;
