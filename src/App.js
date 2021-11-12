import React, { Fragment } from 'react';
import { Route } from 'react-router';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/Headers/MainHeader';
const App = () => {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </Fragment>
  );
};
export default App;
