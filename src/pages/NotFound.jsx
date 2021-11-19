import React from 'react';
import { Card } from '../components/UI/Card.styled';
import { StyledLink } from '../NavLink';
import { NoQuotes } from '../components/Quotes/NoQuotesFound.styled';
const NotFound = (props) => {
  return (
    <div className="centered">
      <NoQuotes>
        {!props.zero && <h1>Page Not Found</h1>}
        {props.zero && <h1>No Quotes Present. Add some!!!</h1>}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            textAlign: 'center',
          }}
        >
          {!props.zero && <StyledLink to="/quotes">All Quotes</StyledLink>}
          <StyledLink to="/new-quote">Add New Quote</StyledLink>
        </div>
      </NoQuotes>
    </div>
  );
};

export default NotFound;
