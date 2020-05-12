import React, { Component } from 'react';
import Navigation from './Navigation';
import {instrumentos} from '../datos/instrumentos.json';
import Tarjeta from './Tarjeta';
import Container from 'react-bootstrap/Container';


class Productos extends Component {
constructor() {
    super();
    this.state = {
        instrumentos
    }
}

    render() {
        const instrumentos = this.state.instrumentos.map((instr, i) => {return (
            <Tarjeta key={instr.id} id={instr.id} nombre={instr.instrumento} marca={instr.marca} modelo={instr.modelo} imagen={instr.imagen} precio={instr.precio} costoEnvio={instr.costoEnvio} cantidadVendida={instr.cantidadVendida} descripcion={instr.descripcion} ></Tarjeta>
        )})
        return (
            <React.Fragment>
              <Navigation></Navigation>
             <Container fluid ="md">
                
                     {instrumentos}
                
             </Container>
          </React.Fragment>
        );
    }
}

export default Productos;