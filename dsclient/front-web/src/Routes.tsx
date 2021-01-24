import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Clients from './pages/Clients';
import Catalog from './pages/Clients';
import ProductDetails from './pages/Clients/components/ClientDetails';
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
      <Route path="/clients/:clientId">
        <ProductDetails />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
