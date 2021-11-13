import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledNavLink = styled(NavLink)`
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
