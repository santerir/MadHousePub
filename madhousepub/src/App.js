import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home'
import Article from './pages/article'

import { About } from './content/s2020/about'

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
          <Route path="/article-1">
            <Article edition={SUMMER2020}>

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
