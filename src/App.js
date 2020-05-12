import React from 'react';

import './assets/css/App.css';

import { Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import about from './components/about';
import Productos from './components/Productos';
import Detalle from './components/Detalle';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} ></Route>
      <Route exact path="/home" component={Home} ></Route>
      <Route exact path="/about" component={about} ></Route>
      <Route exact path="/productos" component={Productos} ></Route>
      <Route exact path="/detalle/:id" component={Detalle} ></Route>
    </Switch>
  );
}

export default App;
