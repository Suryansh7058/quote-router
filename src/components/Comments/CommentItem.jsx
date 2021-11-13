import { CommentItemLi } from './CommentItem.styled';
const CommentItem = (props) => {
  return (
    <CommentItemLi>
      <p>{props.text}</p>
    </CommentItemLi>
  );
};

export default CommentItem;
