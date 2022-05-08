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
import { Pains } from './content/s2021/pains';

import { AboutIII } from './content/s2022/aboutIII';
import { Ihmiskone } from './content/s2022/ihmiskone';

import { SUMMER2020, SUMMER2021, SUMMER2022 } from './editions'

import './sass/style.scss';
import { Blade } from './content/s2022/blade';
import { Housemusic } from './content/s2022/housemusic';
import { Flowers } from './content/s2022/flowers';


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
          <Route path="/about-III">
            <Article edition={SUMMER2022}>
              <AboutIII />
            </Article>
          </Route>
          <Route path="/i-only-want-to-talk-about-flowers">
            <Article edition={SUMMER2022} next="/practices-of-love-and-body" prev="/a-house-music">
              <Flowers />
            </Article>
          </Route>
          <Route path="/a-house-music">
            <Article edition={SUMMER2022} next="/i-only-want-to-talk-about-flowers" prev="/the-blade">
              <Housemusic />
            </Article>
          </Route>
          <Route path="/the-blade">
            <Article edition={SUMMER2022} next="/a-house-music" prev="/ihmiskone">
              <Blade />
            </Article>
          </Route>
          <Route path="/ihmiskone">
            <Article edition={SUMMER2022} next="/the-blade" prev="/ekfrasiksesta-osa-2">
              <Ihmiskone />
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
            <Article edition={SUMMER2021} next="/ihmiskone" prev="/growing-pains">
              <Ekfrasiksesta />
            </Article>
          </Route>
          <Route path="/practices-of-love-and-body" >
            <Article edition={SUMMER2020} next="/rakkaudesta" prev="/i-only-want-to-talk-about-flowers">
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
            <Article edition={SUMMER2020} next="/fluctuants" prev="/cloudbody">
              <Tunne />
            </Article>
          </Route>
          <Route path="/:edition">
            <Home />
          </Route>
          <Redirect exact from='/' to="/III" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
