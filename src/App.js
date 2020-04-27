import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import GameContainer from './GameContainer'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' render={() => <GameContainer />} /> 
      </Switch>
    </div>
  );
}

export default App;
