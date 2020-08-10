import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from './pages/home'
import Article from './pages/article'

import { About } from './content/s2020/about'
import { Polab } from './content/s2020/polab'
import { Rakkaudesta } from './content/s2020/rakkaudesta'
import { Cloudbody } from './content/s2020/cloudbody'
import { Tunne } from './content/s2020/tunne'

import { SUMMER2020 } from './editions'


import './sass/style.scss';

const App = ({ }) => {


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <Article edition={SUMMER2020}>
              <About />
            </Article>
          </Route>
          <Route path="/practices-of-love-and-body" >
            <Article edition={SUMMER2020} next="/rakkaudesta" prev="/tunnemylläkkähässäkkä">
              <Polab />
            </Article>
          </Route>
          <Route path="/rakkaudesta" >
            <Article edition={SUMMER2020} next="/cloudbody" prev="/practices-of-love-and-body">
              <Rakkaudesta />
            </Article>
          </Route>
          <Route path="/cloudbody">
            <Article edition={SUMMER2020} next="/tunnemylläkkähässäkkä" prev="/rakkaudesta">
              <Cloudbody />
            </Article>
          </Route>
          <Route path="/tunnemylläkkähässäkkä">
            <Article edition={SUMMER2020} next="/practices-of-love-and-body" prev="/cloudbody">
              <Tunne />
            </Article>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
