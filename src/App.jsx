import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  )
}
