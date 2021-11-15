import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: teal;
  color: white;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  border: 1px solid teal;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #11acac;
    border-color: #11acac;
  }
`;
export const StyledLinkFlat = styled(Link)`
  cursor: pointer;
  font: inherit;
  color: teal;
  border: none;
  background-color: none;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;

  &:hover,
  &:active {
    background-color: teal;
    color: white;
  }
`;

// export const StyledNavLink = styled(NavLink)`
//   &:hover {
//     position: relative;
//     &::after {
//       content: '';
//       position: absolute;
//       left: 0;
//       right: 0;
//       top: 130%;
//       height: 2.5px;
//       background: white;
//     }
//   }

//   &.${(props) => props.activeClassName} {
//     position: relative;
//     color: lightblue;
//     &::after {
//       content: '';
//       position: absolute;
//       left: 0;
//       right: 0;
//       top: 130%;
//       height: 2.5px;
//       background: red;
//     }
//   }
// `;
