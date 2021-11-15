import React from 'react';
import { Card } from '../components/UI/Card.styled';
import { StyledLink } from '../NavLink';
const NotFound = (props) => {
  return (
    <div className="centered">
      <Card>
        <h1>Page Not Found</h1>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
          }}
        >
          <StyledLink to="/quotes">All Quotes</StyledLink>
          <StyledLink to="/new-quote">Add New Quote</StyledLink>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
