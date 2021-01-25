import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Clients from './pages/Clients';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/clients" exact>
        <Clients />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
