import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Discover from './pages/Discover/Discover';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/discover">
          <Discover />
        </Route>
        <Route path="/about">
          <main>About</main>
        </Route>
        <Route path="/">
          <main>Home</main>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
