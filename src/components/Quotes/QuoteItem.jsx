import QuoteItemLi, { FullScreenLink } from './QuoteItem.styled';

const QuoteItem = (props) => {
  return (
    <QuoteItemLi>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
        <figcaption>{props.id}</figcaption>
      </figure>
      <FullScreenLink to={`/quotes/${props.id}`}>
        View Fullscreen
      </FullScreenLink>
    </QuoteItemLi>
  );
};
export default QuoteItem;
