
import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import StarWarsForm from './components/StarWarsForm';
import People from './components/People';
import Planet from './components/Planet';
import Species from './components/Species';


function App() {
  return (
    <BrowserRouter>
    <StarWarsForm / >
    <Switch>
  
    <Route exact path='/people/:id'>
    <People />
    </Route>

    <Route exact path='/planet/:id'>
    <Planet />
    </Route>

    <Route exact path='/species/:id'>
    <Species />
    </Route>


    </Switch>
    </BrowserRouter>
  );
}

export default App;
