import React, { Component } from 'react';
import Navigation from './Navigation';

import Tarjeta from './Tarjeta';
import Container from 'react-bootstrap/Container';
// Dominios a hacer el llamado de server
// en caso de hacerlo a heroku usar:
// https://restserver-instrumentos.herokuapp.com
// en caso de usar el proyecto localmente, usar:
//http://localhost:9000


class Productos extends Component {
constructor(props) {
    super(props);
    console.log('constructor')
    this.state = {
       db: []
    }
    
}
componentDidMount(){
    
    console.log('ciclo montado')
    this.getInstrumentosServer();
    console.log(this.state.db)
  }

  componentWillUnmount(){
    
    console.log('ciclo desmontado')
  }
 
  
getInstrumentosServer(){
    fetch('https://restserver-instrumentos.herokuapp.com/instrumento')
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({db: responseJson.instrumentos});
    })
    
    
  }
    render() {
      const imageurl = "https://restserver-instrumentos.herokuapp.com/images/";
        const instrumentos = this.state.db.map((instr, i) => {return (
            <Tarjeta key={instr._id} id={instr._id} nombre={instr.instrumento} marca={instr.marca} modelo={instr.modelo} imagen={imageurl+ instr.imagen} precio={instr.precio} costoEnvio={instr.costoEnvio} cantidadVendida={instr.cantidadVendida} descripcion={instr.descripcion} ></Tarjeta>
            )})
            
        return (
            <React.Fragment>
               
               
              <Navigation></Navigation>
             <Container fluid ="md">
        <p>{instrumentos}</p>
                    
                
             </Container>
          </React.Fragment>
        );
    }
}

export default Productos;