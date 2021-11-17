import { QuoteFigure } from './HighlightedQuote.styled';
const HighlightedQuote = (props) => {
  return (
    <QuoteFigure>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </QuoteFigure>
  );
};

export default HighlightedQuote;
