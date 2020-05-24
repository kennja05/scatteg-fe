import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import GameContainer from './GameContainer'
import About from './About'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <GameContainer />} /> 
        <Route path = '/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
