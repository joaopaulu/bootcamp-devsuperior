import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageHeader from './core/components/PageHeader';
import Admin from './pages/Admin';
import Clients from './pages/Clients';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <PageHeader />
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
