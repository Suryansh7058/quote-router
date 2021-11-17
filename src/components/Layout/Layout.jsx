import React from 'react';
import MainNavigation from './MainNavigation';
import Main from './Layout.styled';
const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <Main>{props.children}</Main>
    </React.Fragment>
  );
};

export default Layout;
