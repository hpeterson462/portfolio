import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}
