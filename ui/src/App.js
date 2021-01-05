import React from 'react';
import { history } from "./helpers/history";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import styles from './scss/master.scss';

export default function App() {

  // standard react-router-dom site layout
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/page1' component={Page1} />
            <Route path='/page2' component={Page2} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
