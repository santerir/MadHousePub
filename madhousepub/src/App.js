import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import Home from './pages/home'
import Article from './pages/article'

import { About } from './content/s2020/about'
import { Polab } from './content/s2020/polab'
import { Rakkaudesta } from './content/s2020/rakkaudesta'
import { Cloudbody } from './content/s2020/cloudbody'
import { Tunne } from './content/s2020/tunne'


import { AboutII } from './content/s2021/aboutII'
import { Jasenet } from './content/s2021/jasenet'
import { Fluctuants } from './content/s2021/fluctuants';
import { Ekfrasiksesta } from './content/s2021/ekfrasiksesta';

import { SUMMER2020, SUMMER2021 } from './editions'

import './sass/style.scss';
import { Pains } from './content/s2021/pains';

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
          <Route path="/about-II">
            <Article edition={SUMMER2021}>
              <AboutII />
            </Article>
          </Route>
          <Route path="/fluctuants" >
            <Article edition={SUMMER2021} next="/ryhman-jasenet" prev="/tunnemylläkkähässäkkä">
              <Fluctuants />
            </Article>
          </Route>
          <Route path="/ryhman-jasenet" >
            <Article edition={SUMMER2021} next="/growing-pains" prev="/fluctuants">
              <Jasenet />
            </Article>
          </Route>
          <Route path="/growing-pains" >
            <Article edition={SUMMER2021} next="/ekfrasiksesta-osa-2" prev="/ryhman-jasenet" >
              <Pains />
            </Article>
          </Route>
          <Route path="/ekfrasiksesta-osa-2" >
            <Article edition={SUMMER2021} next="/practices-of-love-and-body" prev="/growing-pains">
              <Ekfrasiksesta />
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
          <Route path="/:edition">
            <Home />
          </Route>
          <Redirect exact from='/' to="/II" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
