import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import AboutMe from './AboutMe';
import TechStack from './TechStack';
import Contact from './Contact';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/techstack" component={TechStack} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  )
}
