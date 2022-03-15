import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import WordAndNumber from './components/WordAndNumber';
import Home from './components/Home';
import HelloColor from './components/HelloColor';


function App() {
  return (
    <BrowserRouter>

    <Switch>
    <Route exact path='/home'>
    <Home />
    </Route>

    <Route exact path='/:input'>
    <WordAndNumber />
    </Route>


    <Route exact path='/:word/:fontColor/:bgColor'>
    <HelloColor />
    </Route>
    </Switch>


    </BrowserRouter>
  );
}

export default App;
