import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './pages/Search/Search';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <main>About</main>
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <main>Home</main>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
