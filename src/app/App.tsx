import React from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Bookmarks from './pages/Bookmarks/Bookmarks';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/bookmark">
          <Bookmarks />
        </Route>
        <Route path="/about">
          <main>About</main>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
