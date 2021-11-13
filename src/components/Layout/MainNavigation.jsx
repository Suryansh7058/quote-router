import React from 'react';
import { Header, Logo, Nav } from './MainNavigation.styled';
import { NavLink } from 'react-router-dom';
const MainNavigation = () => {
  return (
    <Header>
      <Logo>Great Quotes</Logo>
      <Nav>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName="active">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName="active">
              Add A Quote
            </NavLink>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};

export default MainNavigation;
