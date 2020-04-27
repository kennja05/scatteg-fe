import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import ListView from './ListView'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' render={() => <ListView />} /> 
      </Switch>
    </div>
  );
}

export default App;
