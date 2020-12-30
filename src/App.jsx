import React from 'react';
import './index.css';
import "tailwindcss/tailwind.css";
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
import Resume from './Resume';

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
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    </div>
  )
}
