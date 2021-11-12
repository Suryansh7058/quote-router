import React from 'react';
import { Header } from './MainHeader.styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  &:hover {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 130%;
      height: 2.5px;
      background: white;
    }
  }

  &.${(props) => props.activeClassName} {
    position: relative;
    color: lightblue;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 130%;
      height: 2.5px;
      background: red;
    }
  }
`;

const MainHeader = () => {
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <StyledNavLink activeClassName="any" to="/welcome">
              Welcome
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink activeClassName="any" to="/products">
              Products
            </StyledNavLink>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default MainHeader;
