import React from 'react';

import './assets/css/App.css';

import { Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import about from './components/about';
import Productos from './components/Productos';
import Detalle from './components/Detalle';
import agregarInstrumento from './components/agregarInstrumento';

// Dominios a hacer el llamado de server
// en caso de hacerlo a heroku usar:
// https://restserver-instrumentos.herokuapp.com
// en caso de usar el proyecto localmente, usar:
//http://localhost:9000

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} ></Route>
      <Route exact path="/home" component={Home} ></Route>
      <Route exact path="/about" component={about} ></Route>
      <Route exact path="/productos" component={Productos} ></Route>
      <Route exact path="/detalle/:id" component={Detalle} ></Route>
      <Route exact path="/agregarInstrumento" component={agregarInstrumento} ></Route>
    </Switch>
  );
}

export default App;
